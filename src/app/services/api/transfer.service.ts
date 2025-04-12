import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../interfaces/IListDetalleTransferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  transferencias: IListDetalleTransferencia[] = [];

  readonly apiUrl = 'http://localhost:3000/api/transfers';

  // transferencias: IListDetalleTransferencia[];

  constructor(private http: HttpClient) {
    // this.transferencias = [];
  }

  getTransfer(): Observable<ResTransferencia> {
    return this.http.get<ResTransferencia>(this.apiUrl);
  }

  getTransferId(id: number): Observable<ResTransferencia> {
    return this.http.get<ResTransferencia>(`${this.apiUrl}/${id}`);
  }
}
