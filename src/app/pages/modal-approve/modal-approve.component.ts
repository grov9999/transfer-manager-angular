import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../utils/formatDate';

@Component({
  selector: 'app-modal-approve',
  imports: [CustomDateFormatPipe,ButtonComponent],
  templateUrl: './modal-approve.component.html',
  styleUrl: './modal-approve.component.css',
})
export class ModalApproveComponent {
  selectedTransfers: IListDetalleTransferencia[] = [];
  constructor(public transferService: TransferService) {}
  buttonClicked = false;
  handleButtonClick() {
    this.buttonClicked = true;
    console.log('Button in parent component was clicked!');
  }
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
