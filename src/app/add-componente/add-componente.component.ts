import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Models';
import { CadastroServiceComponent } from '../cadastroComponent/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-componente',
  templateUrl: './add-componente.component.html',
  styleUrls: ['./add-componente.component.scss']
})
export class AddComponenteComponent implements OnInit {

  addcomponent:Cadastro = {
    urlImg: '',
    title: 'Processador',
    description: 'Processador 2 núcleos, com 2.5ghz'
  }

  constructor(private addcomponentservice:CadastroServiceComponent, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarComponent(): void{
    this.addcomponentservice.create(this.addcomponent).subscribe(() => {
      this.addcomponentservice.showmessage('Pc cadastrado');
    })
  }

}
