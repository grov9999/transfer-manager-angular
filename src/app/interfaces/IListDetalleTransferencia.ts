export interface IListDetalleTransferencia {
  resultado_pt_id: number;
  codigo: string;
  fecha_generacion: Date;
  almacen_origen: string;
  almacen_destino: string;
  monto_total: string;
  moneda: string;
  estado: string;
  usuario_creador: string;
  usuario_aprobador: string;
  fecha_aprobacion: Date;
  motivo_rechazo: string;
  referencia_sap: string;
  observaciones: null | string;
  log_accion: string;
  log_usuario: string;
  log_fecha: string;
  log_detalle: string;
  centro_costo: string;
  almacen_origen_id: number;
  almacen_destino_id: number;
  usuario_creador_id: number;
  usuario_aprobador_id?: number | null;
}

export interface ResTransferencia {
  data: IListDetalleTransferencia[];
}
