import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Models';
import { CadastroComponent } from '../cadastroComponent/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-componente',
  templateUrl: './add-componente.component.html',
  styleUrls: ['./add-componente.component.scss']
})
export class AddComponenteComponent implements OnInit {

  addcomponent:Cadastro = {
    urlImg: '',
    title: '',
    description: ''
  }

  constructor(private addcomponentservice:CadastroComponent, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarComponent(): void{
    this.addcomponentservice.create(this.addcomponent).subscribe(() => {
      this.addcomponentservice.showmessage('Componente cadastrado');
    })

    setTimeout(() => {
      this.router.navigate(['/homepage'])
    }, 3000)
  }

}
