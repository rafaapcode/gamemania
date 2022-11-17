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
  public id:number;

  constructor(private fb: FormBuilder, private addcomponenteservice:CadastroComponent, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.id = id;
    this.addcomponenteservice.readById(id).subscribe(componente => {
      this.updateComponente = this.fb.group({
        id: [componente.id, [Validators.required]],
        urlImg: [componente.urlImg, [Validators.required]],
        title: [componente.title, [Validators.required, Validators.minLength(4)] ],
        description: [componente.description, [Validators.required]]
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

  deleteCadastro(): void {
    this.addcomponenteservice.deleteCadastro(this.id).subscribe(() => {
      this.addcomponenteservice.showmessage("Periferico deletado com Sucesso");
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

  get urlImg() { return this.updateComponente.get('urlImg'); };
  get title() { return this.updateComponente.get('title'); };
  get description() { return this.updateComponente.get('description'); };
}
