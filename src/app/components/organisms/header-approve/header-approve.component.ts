import { Component } from '@angular/core';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../../services/api/transfer.service';

@Component({
  selector: 'app-header-approve',
  imports: [],
  templateUrl: './header-approve.component.html',
  styleUrl: './header-approve.component.css',
})
export class HeaderApproveComponent {
  selectedTransfers: IListDetalleTransferencia[] = [];
  constructor(public transferService: TransferService) {}
  onReturn(): void {
    const acciones: IListDetalleTransferencia[] = this.selectedTransfers.map(
      (detalle) => ({
        ...detalle,
        pt_id: detalle.resultado_pt_id,
        estado: 'Aprobado',
        usuario_aprobador_id: 2,
        motivo_rechazo: '',
        referencia_sap: '',
      })
    );

    this.transferService.postUpdateTranfer(acciones).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Transferencia Aprobada con éxito!');
      },
      error: (err) => {
        console.log('Error al enviar el detalle de transferencia:');
      },
    });
  }
}
