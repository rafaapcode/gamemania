import { Cadastro } from '../Models';
import { CadastroPc } from '../cadastroPc/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styleUrls: ['./update-pc.component.scss']
})
export class UpdatePcComponent implements OnInit {

  public updatePc:FormGroup;

  constructor(private fb: FormBuilder, private addpcservice:CadastroPc, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.addpcservice.readById(id).subscribe(pc => {
      this.updatePc = this.fb.group({
        id: [pc.id, Validators.compose([Validators.required])],
        urlImg: [pc.urlImg, Validators.compose([Validators.required])],
        title:  [pc.title, Validators.compose([Validators.required])],
        description: [pc.description, Validators.compose([Validators.required])]
      })
    })
  }

  updateCadastroPc():void {
    let form = this.updatePc.value;
    this.addpcservice.updateCadastro(form, form.id).subscribe(pc => {
      this.addpcservice.showmessage('PC atualizado com sucesso !!');
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

}
