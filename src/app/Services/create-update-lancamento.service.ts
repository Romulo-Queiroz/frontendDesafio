import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LancamentoModel } from '../Models/lancamento.model';


@Injectable({
  providedIn: 'root',
})
export class CreateUpdateLancamentoService {
  constructor(private http: HttpClient) {}

 Nginit () {
 
 }
 
  updateLancamento (lancamento: LancamentoModel, lancamentoId:number): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/api/lancamento/edit/${lancamentoId}`, lancamento)
    .pipe(
        map((res: any) => {
        return res;
        }),
        catchError((err) => {
        return throwError(err);
        })
    );
  }

  createLancamento (lancamento: LancamentoModel): Observable<any> {
      return this.http.post<any>(`${environment.apiBaseUrl}/api/lancamento/create`, lancamento)
      .pipe(
          map((res: any) => {
          return res;
          }),
          catchError((err) => {
          return throwError(err);
          })
      );
  }
}

 

