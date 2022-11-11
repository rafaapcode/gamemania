import { Cadastro } from '../Models';
import { CadastroPc } from '../cadastroPc/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.scss']
})
export class AddPcComponent implements OnInit {

  addpc:Cadastro = {
    id: 0,
    urlImg: '',
    title: '',
    description: ''
  }

  updatePc:Cadastro;

  constructor(private addpcservice:CadastroPc, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  cadastrarPc(): void{
    this.addpcservice.create(this.addpc).subscribe(() => {
      this.addpcservice.showmessage('Pc cadastrado');
    });

    setTimeout(() => {
      this.router.navigate(['/homepage'])
    }, 3000)
  }

  updateCadastro():void {
    this.addpcservice.updateCadastro(this.updatePc).subscribe(pc => {
      this.addpcservice.showmessage('PC atualizado com sucesso !!');
      this.router.navigate(['/homepage']);
    })
  }

}
