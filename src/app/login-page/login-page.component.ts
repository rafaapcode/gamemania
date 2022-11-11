import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formCliente: FormGroup;
  public router: Router;

  constructor(private fb: FormBuilder, router:Router) { }

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
  }

  get cliente_nome() { return this.formCliente.get('cliente_name'); };
  get cliente_pass() { return this.formCliente.get('cliente_pass'); };

}
