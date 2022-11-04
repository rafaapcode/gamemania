import { CadastroPc } from './addpc.models';
import { AddpcService } from './../cadastro/addpc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.scss']
})
export class AddPcComponent implements OnInit {

  addpc:CadastroPc = {
    urlImg: '',
    title: 'Processador maroto',
    description: 'Processador 2 núcleos, com 2.5ghz'
  }

  constructor(private addpcservice:AddpcService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarPc(): void{
    this.addpcservice.create(this.addpc).subscribe(() => {
      this.addpcservice.showmessage('Pc cadastrado');
    })
  }

}
