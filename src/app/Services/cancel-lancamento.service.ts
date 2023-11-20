import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { LancamentoModel } from '../Models/lancamento.model';

@Injectable({
    providedIn: 'root',
})
export class CancelLancamentoService {
    constructor(private http: HttpClient) {}

    cancelarLancamento(lancamentoId: number): Observable<void> {
        return this.http.put<void>(`${environment.apiBaseUrl}/api/lancamento/cancel/${lancamentoId}`, null);
    }
}