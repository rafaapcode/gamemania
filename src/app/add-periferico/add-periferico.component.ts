import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Models';
import { CadastroPeriferico } from '../cadastroPeriferico/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-periferico',
  templateUrl: './add-periferico.component.html',
  styleUrls: ['./add-periferico.component.scss']
})
export class AddPerifericoComponent implements OnInit {

  addperiferico:Cadastro = {
    urlImg: '',
    title: '',
    description: ''
  }

  constructor(private addperifericoservice:CadastroPeriferico, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarPeriferico(): void{
    this.addperifericoservice.create(this.addperiferico).subscribe(() => {
      this.addperifericoservice.showmessage('Periferico cadastrado');
    });
    setTimeout(() => {
      this.router.navigate(['/homepage'])
    }, 3000)
  }

}
