export interface ITransferRes {
  id: number;
  codigo: string;
  fecha_generacion: string;
  almacen_origen_id: number;
  almacen_destino_id: number;
  monto_total: string;
  moneda: string;
  centro_costo: string;
  estado: string;
  usuario_creador_id: number;
  usuario_aprobador_id: any;
  fecha_aprobacion: any;
  motivo_rechazo: any;
  referencia_sap: any;
  observaciones: any;
  habilitado: boolean;
}

export interface ITransferReq {
  almacen_origen_id: number;
  almacen_destino_id: number;
  monto_total: number;
  usuario_creador_id: number;
  centro_costo: string;
  observaciones?: string;
}
export interface ITransferRes {
  data: ITransferRes
}
