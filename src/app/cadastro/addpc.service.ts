import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CadastroPc } from '../add-pc/addpc.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddpcService {

  baseUrl = 'http://localhost:4200/pc'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showmessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: 'bottom'
    })
  }

  create(cadastro: CadastroPc): Observable<CadastroPc> {
    return this.http.post<CadastroPc>(this.baseUrl, cadastro);
  }
}
