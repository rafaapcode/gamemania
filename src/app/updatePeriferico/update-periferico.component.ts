import { Cadastro } from '../Models';
import { CadastroPeriferico } from '../cadastroPeriferico/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-periferico',
  templateUrl: './update-periferico.component.html',
  styleUrls: ['./update-periferico.component.scss']
})
export class UpdatePerifericoComponent implements OnInit {

  public updatePeriferico: FormGroup;
  public id: number;

  constructor(private fb: FormBuilder, private addperifericoservice: CadastroPeriferico, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.id = id;
    this.addperifericoservice.readById(id).subscribe(periferico => {
      this.updatePeriferico = this.fb.group({
        id: [periferico.id, [Validators.required]],
        urlImg: [periferico.urlImg, [Validators.required]],
        title: [periferico.title, [Validators.required, Validators.minLength(4)] ],
        description: [periferico.description, [Validators.required]]
      })
    })
  }

  updateCadastroPeriferico(): void {

    let form = this.updatePeriferico.value;
    this.addperifericoservice.updateCadastro(form, form.id).subscribe(pc => {
      this.addperifericoservice.showmessage('Periferico atualizado com sucesso !!');
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })

  }

  deleteCadastro(): void {
    this.addperifericoservice.deleteCadastro(this.id).subscribe(() => {
      this.addperifericoservice.showmessage("Periferico deletado com Sucesso");
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000)
    })

  }

  get urlImg() { return this.updatePeriferico.get('urlImg'); };
  get title() { return this.updatePeriferico.get('title'); };
  get description() { return this.updatePeriferico.get('description'); };

}
