import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { LancamentoModel } from '../Models/lancamento.model';

@Injectable({
    providedIn: 'root', 
  })
export class ListLancamentoService {
  constructor(private http: HttpClient) {}

  listLancamento (): Observable<any> {
    return this.http.get<LancamentoModel>(`${environment.apiBaseUrl}/api/lancamento/list`)
  }
}