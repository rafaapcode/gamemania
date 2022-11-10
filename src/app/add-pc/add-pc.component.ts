import { Cadastro } from '../Models';
import { CadastroPc } from '../cadastroPc/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.scss']
})
export class AddPcComponent implements OnInit {

  addpc:Cadastro = {
    urlImg: '',
    title: '',
    description: ''
  }

  constructor(private addpcservice:CadastroPc, private router:Router) { }

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

}
