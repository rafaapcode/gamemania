import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../Models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CadastroComponent {

  baseUrl = 'http://localhost:3001/component'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showmessage(msg: string): void {
   this.snackbar.open(msg, 'X', {
    duration: 6000,
    verticalPosition: 'bottom'
   })
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }

  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl);
  }

  readById(id:number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cadastro>(url);
  }

  updateCadastro(cadastro:Cadastro, id:number = 0): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Cadastro>(url, cadastro);
  }

  deleteCadastro(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cadastro>(url);
  }
}
