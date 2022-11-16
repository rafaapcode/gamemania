import { Cadastro } from '../Models';
import { CadastroComponent } from '../cadastroComponent/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-componente',
  templateUrl: './update-componente.component.html',
  styleUrls: ['./update-componente.component.scss']
})
export class UpdateComponenteComponent implements OnInit {

  public updateComponente:FormGroup;

  constructor(private fb: FormBuilder, private addcomponenteservice:CadastroComponent, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.addcomponenteservice.readById(id).subscribe(componente => {
      this.updateComponente = this.fb.group({
        id: [componente.id, Validators.compose([Validators.required])],
        urlImg: [componente.urlImg, Validators.compose([Validators.required])],
        title:  [componente.title, Validators.compose([Validators.required])],
        description: [componente.description, Validators.compose([Validators.required])]
      })
    })
  }

  updateCadastroComponente():void {
    let form = this.updateComponente.value;
    this.addcomponenteservice.updateCadastro(form, form.id).subscribe(pc => {
      this.addcomponenteservice.showmessage('Componente atualizado com sucesso !!');
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

}
