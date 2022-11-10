import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Models';
import { CadastroServicePeriferico } from '../cadastroPeriferico/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-periferico',
  templateUrl: './add-periferico.component.html',
  styleUrls: ['./add-periferico.component.scss']
})
export class AddPerifericoComponent implements OnInit {

  addperiferico:Cadastro = {
    urlImg: '',
    title: 'Teclado Mecânico',
    description: 'Teclas removíveis'
  }

  constructor(private addperifericoservice:CadastroServicePeriferico, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarPeriferico(): void{
    this.addperifericoservice.create(this.addperiferico).subscribe(() => {
      this.addperifericoservice.showmessage('Pc cadastrado');
    })
  }

}
