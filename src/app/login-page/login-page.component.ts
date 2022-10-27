import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formCliente: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCliente = this.fb.group({
      cliente_name: [, Validators.compose([Validators.required])],
      cliente_pass: [, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
    })
  }

  entrar() {
    let form = this.formCliente.value;
    console.log(form);
  }

  get cliente_nome() { return this.formCliente.get('cliente_name'); };
  get cliente_pass() { return this.formCliente.get('cliente_pass'); };

}
