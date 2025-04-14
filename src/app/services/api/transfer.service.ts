import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../interfaces/IListDetalleTransferencia';
import { map, Observable } from 'rxjs';
import { IAlmacen } from '../../interfaces/IAlmacen';

interface Transferencia {
  resultado_pt_id: number;
  codigo: string;
  fecha_generacion: string;
  almacen_origen: string;
  almacen_destino: string;
  monto_total: string;
  moneda: string;
  estado: string;
  usuario_creador: string;
  usuario_aprobador: string | null;
  fecha_aprobacion: string | null;
  motivo_rechazo: string | null;
  referencia_sap: string | null;
  observaciones: string;
  log_accion: string;
  log_usuario: string;
  log_fecha: string;
  centro_costo: string;
  almacen_origen_id: number;
  almacen_destino_id: number;
  usuario_creador_id: number;
}

interface ApiResponse {
  data: Transferencia[];
}

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  readonly apiUrl = 'http://localhost:3000/api';

  transferencias: IListDetalleTransferencia[];

  constructor(private http: HttpClient) {
    this.transferencias = []
  }


  // getTransfer(): Observable<ResTransferencia> {
  //   return this.http.get<ResTransferencia>(`${this.apiUrl}/transfers`);
  // }

  // getAlmacenes() {
  //   return this.http.get<IAlmacen[]>(`${this.apiUrl}/almacenes`);
  // }

  getAll(): Observable<IListDetalleTransferencia[]> {
    return this.http.get<IListDetalleTransferencia[]>(`${this.apiUrl}/transfers`);
  }

  // getById(id: number): Observable<Transferencia> {
  //   return this.http.get<Transferencia>(`${this.apiUrl}/${id}`);
  // }

  // create(data: Omit<Transferencia, 'resultado_pt_id'>): Observable<Transferencia> {
  //   return this.http.post<Transferencia>(this.apiUrl, data);
  // }

  // update(id: number, data: Transferencia): Observable<Transferencia> {
  //   return this.http.put<Transferencia>(`${this.apiUrl}/${id}`, data);
  // }

  // delete(id: number): Observable<any> { // La respuesta de eliminación puede variar
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
