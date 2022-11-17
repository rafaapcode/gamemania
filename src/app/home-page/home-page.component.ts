import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Models';
import { CadastroPc } from '../cadastroPc/cadastro.service';
import { CadastroComponent } from '../cadastroComponent/cadastro.service';
import { CadastroPeriferico } from '../cadastroPeriferico/cadastro.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cadastrosPc: Cadastro[]
  cadastrosPeriferico: Cadastro[]
  cadastrosComponente: Cadastro[]


  constructor(private cadastrarPc: CadastroPc, private cadastrarComponent: CadastroComponent, private cadastrarPeriferico: CadastroPeriferico) { }

  ngOnInit(): void {
    this.cadastrarPc.read().subscribe(cadastros => {
      this.cadastrosPc = cadastros;
    });
    this.cadastrarComponent.read().subscribe(cadastros => {
      this.cadastrosComponente = cadastros;
    })
    this.cadastrarPeriferico.read().subscribe(cadastros => {
      this.cadastrosPeriferico = cadastros;
    })
  }

}
