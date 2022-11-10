import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicePc {

  baseUrl = 'http://localhost:3001/pc'

  constructor(private http: HttpClient) { }

  showmessage(msg: string): void {
   alert('Computador adicionado com Sucesso !!')
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }
}
