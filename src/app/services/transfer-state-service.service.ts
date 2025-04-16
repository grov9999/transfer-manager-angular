import { Injectable, signal } from '@angular/core';
import { ResTransferencia } from '../interfaces/IListDetalleTransferencia';
import { ResAlmacen } from '../interfaces/IAlmacen';
import { ITransferReq } from '../interfaces/ITransferCreate';

@Injectable({
  providedIn: 'root'
})
export class TransferStateServiceService {

  private transferenciasSignal = signal<ResTransferencia['data']>([]);
  public transferencia = this.transferenciasSignal.asReadonly();

  private almacenesSignal = signal<ResAlmacen['data']>([]);
  public almacene = this.almacenesSignal.asReadonly();

  private nuevaTransferenciaSignal = signal({
    almacen_origen_id: 0,
    almacen_destino_id: 0,
    monto_total: 0,
    usuario_creador_id: 1,
    centro_costo: '',
  });
  public nuevaTransferencia = this.nuevaTransferenciaSignal.asReadonly();

  setTransferencias(data: ResTransferencia['data']) {
    this.transferenciasSignal.set(data);
  }

  setAlmacenes(data: ResAlmacen['data']) {
    this.almacenesSignal.set(data);
  }

  updateNuevaTransferencia(partialData: Partial<ITransferReq>) {
    this.nuevaTransferenciaSignal.update(current => ({
      ...current,
      ...partialData
    }));
  }

  resetNuevaTransferencia() {
    this.nuevaTransferenciaSignal.set({
      almacen_origen_id: 0,
      almacen_destino_id: 0,
      monto_total: 0,
      usuario_creador_id: 1,
      centro_costo: '',
    });
  }
}
