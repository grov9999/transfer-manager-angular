import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlmacen, ResAlmacen } from '../../interfaces/IAlmacen';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../interfaces/IListDetalleTransferencia';
import { ITransferReq } from '../../interfaces/ITransferCreate';

interface postTransferencia {
  almacen_origen_id: number;
  almacen_destino_id: number;
  monto_total: string;
  usuario_creador_id: number;
  centro_costo: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  readonly apiUrl = 'http://localhost:3000/api';

  transferencias: IListDetalleTransferencia[];
  almacenes: IAlmacen[];

  constructor(private http: HttpClient) {
    this.transferencias = [];
    this.almacenes = [];
  }

  getTransfer(): Observable<ResTransferencia> {
    return this.http.get<ResTransferencia>(`${this.apiUrl}/transfers`);
  }

  getTransferId(id: string): Observable<ResTransferencia> {
    return this.http.get<ResTransferencia>(`${this.apiUrl}/transfer/${id}`);
  }

  getAlmacenes(): Observable<ResAlmacen> {
    return this.http.get<ResAlmacen>(`${this.apiUrl}/almacenes`);
  }

  postTranfer(data: ITransferReq): Observable<ResTransferencia> {
    return this.http.post<ResTransferencia>(`${this.apiUrl}/transfer`, data);
  }

  deleteTransfer(id: string): Observable<ResTransferencia> {
    return this.http.patch<ResTransferencia>(
      `${this.apiUrl}/transfer/${id}`,
      null
    );
  }

  postUpdateTranfer(
    data: IListDetalleTransferencia[]
  ): Observable<ResTransferencia> {
    return this.http.post<ResTransferencia>(
      `${this.apiUrl}/updateStatus`,
      data
    );
  }
}
