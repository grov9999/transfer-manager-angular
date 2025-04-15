import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../../utils/formatDate';

@Component({
  selector: 'app-transfer-table',
  imports: [CustomDateFormatPipe, FormsModule],
  templateUrl: './transfer-table.component.html',
  styleUrl: './transfer-table.component.css',
})
export class TransferTableComponent implements OnInit {
  // selectedTransfer: IListDetalleTransferencia | null = null;
  constructor(public transferService: TransferService) {}
  filtro: IListDetalleTransferencia[] = [];
  codigoFiltro = '';
  ngOnInit(): void {
    this.getTransfer();
  }

  getTransfer(): void {
    this.transferService.getTransfer().subscribe({
      next: (res: ResTransferencia) => {
        this.transferService.transferencias = res.data;
        this.getTransferFilter();
        console.log('data:', this.transferService.transferencias);
      },
      error: (err: ResTransferencia) => {
        console.log('error:', this.transferService.transferencias);
      },
    });
  }

  getTransferFilter(): void {
    this.filtro = this.transferService.transferencias.filter((item) =>
      item.codigo.toLowerCase().includes(this.codigoFiltro.toLowerCase())
    );
  }

  deleteTransfer(id: string) {
    if (window.confirm('¿Estás seguro de eliminar la transferencia?')) {
      this.transferService.deleteTransfer(id).subscribe({
        next: (res) => {
          console.log('Transferencia eliminada:', res.data);
          window.alert('Transferencia eliminada con éxito!');
        },
        error: (err) => {
          console.log('Error al eliminar la transferencia:', err);
          window.alert('Error al eliminar la transferencia!');
        },
      });
    }
  }

  // onRowSelect(event: Event, item: IListDetalleTransferencia): void {
  //   const isChecked = (event.target as HTMLInputElement).checked;
  //   if (isChecked) {
  //     this.selectedTransfer = item;
  //   } else {
  //     if (
  //       this.selectedTransfer &&
  //       this.selectedTransfer.resultado_pt_id === item.resultado_pt_id
  //     ) {
  //       this.selectedTransfer = null;
  //     }
  //   }
  // }

  // onApprove(): void {
  //   if (!this.selectedTransfer) {
  //     window.alert('Por favor, seleccione una fila antes de aprobar.');
  //     return;
  //   }
  //   const acciones: IListDetalleTransferencia[] = [
  //     {
  //       ...this.selectedTransfer,
  //       resultado_pt_id: this.selectedTransfer.resultado_pt_id,
  //       estado: 'Aprobado',
  //       usuario_aprobador_id: 2,
  //       motivo_rechazo: '',
  //       referencia_sap: '',
  //     },
  //   ];

  //   this.transferService.postUpdateTranfer(acciones).subscribe({
  //     next: (res: ResTransferencia) => {
  //       console.log('Exito');
  //       window.alert('Transferencia aprobada con éxito');
  //       this.getTransfer();
  //       this.selectedTransfer = null;
  //     },
  //     error: (err) => {
  //       console.error('Error:', err);
  //       window.alert('Error al aprobar la transferencia');
  //     },
  //   });
  // }
}
