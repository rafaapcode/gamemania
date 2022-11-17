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

  public updatePc: FormGroup;
  public id:number;

  constructor(private fb: FormBuilder, private addpcservice: CadastroPc, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.id = id;
    this.addpcservice.readById(id).subscribe(pc => {
      this.updatePc = this.fb.group({
        id: [pc.id, [Validators.required]],
        urlImg: [pc.urlImg, [Validators.required]],
        title: [pc.title, [Validators.required, Validators.minLength(4)] ],
        description: [pc.description, [Validators.required]]
      })
    })
  }

  updateCadastroPc(): void {
    let form = this.updatePc.value;
    this.addpcservice.updateCadastro(form, form.id).subscribe(pc => {
      this.addpcservice.showmessage('PC atualizado com sucesso !!');
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

  deleteCadastro(): void {
    this.addpcservice.deleteCadastro(this.id).subscribe(() => {
      this.addpcservice.showmessage("Pc deletado com Sucesso");
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })
  }

  get urlImg() { return this.updatePc.get('urlImg'); };
  get title() { return this.updatePc.get('title'); };
  get description() { return this.updatePc.get('description'); };

}
