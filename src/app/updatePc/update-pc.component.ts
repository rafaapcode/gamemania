import { Cadastro } from '../Models';
import { CadastroPc } from '../cadastroPc/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styleUrls: ['./update-pc.component.scss']
})
export class UpdatePcComponent implements OnInit {

  updatePc:Cadastro;

  constructor(private addpcservice:CadastroPc, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.addpcservice.readById(id).subscribe(pc => {
      this.updatePc = pc;
    })
  }

  updateCadastroPc():void {
    this.addpcservice.updateCadastro(this.updatePc).subscribe(pc => {
      this.addpcservice.showmessage('PC atualizado com sucesso !!');
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

}
