import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../../interfaces/IListDetalleTransferencia';
import { ModalDetailComponent } from '../../../pages/modal-detail/modal-detail.component';
import { TransferService } from '../../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../../utils/formatDate';

@Component({
  selector: 'app-transfer-table',
  imports: [
    CustomDateFormatPipe,
    FormsModule,
    ModalDetailComponent,
    CommonModule,
  ],
  templateUrl: './transfer-table.component.html',
  styleUrl: './transfer-table.component.css',
})
export class TransferTableComponent implements OnInit {
  constructor(public transferService: TransferService) {}
  filtro: IListDetalleTransferencia[] = [];
  pagedFiltro: IListDetalleTransferencia[] = [];
  codigoFiltro: string = '';

  pageSize = 5;
  currentPage = 1;
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];
  startIndex = 0;
  endIndex = 0;

  ngOnInit(): void {
    this.getTransfer();

    (window as any).abrirModal = this.abrirModal.bind(this);
    (window as any).cerrarModal = this.cerrarModal.bind(this);
  }

  getTransfer(): void {
    this.transferService.getTransfer().subscribe({
      next: (res: ResTransferencia) => {
        this.transferService.transferencias = res.data;
        this.getTransferFilter();
        this.filterAndPaginate();
        console.log('data:', this.transferService.transferencias);
      },
      error: (err: ResTransferencia) => {
        console.log('error:', this.transferService.transferencias);
      },
    });
  }

  getTransferFilter(): void {
    this.currentPage = 1;
    this.filterAndPaginate();
  }

  filterAndPaginate(): void {
    this.filtro = this.transferService.transferencias.filter((item) =>
      item.codigo.toLowerCase().includes(this.codigoFiltro.toLowerCase())
    );
    this.totalItems = this.filtro.length;
    this.calculateTotalPages();
    this.updatePagedFiltro();
  }

  deleteTransfer(id: string) {
    if (window.confirm('¿Estás seguro de eliminar la transferencia?')) {
      this.transferService.deleteTransfer(id).subscribe({
        next: (res) => {
          console.log('Transferencia eliminada:', res.data);
          window.alert('Transferencia eliminada con éxito!');
          this.getTransfer();
        },
        error: (err) => {
          console.log('Error:', err);
          window.alert('Error al eliminar la transferencia');
        },
      });
    }
  }

  detalleSeleccionado: any = null;

  onSelect(event: Event, item: any): void {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.detalleSeleccionado = item;
      console.log('Item seleccionado:', this.detalleSeleccionado);
    } else {
      this.detalleSeleccionado = null;
      console.log('Item deseleccionado');
    }
  }

  aprobarTransferencia(): void {
    if (!this.detalleSeleccionado) {
      console.log('No hay transferencia seleccionada.');
      return;
    }
    const body = {
      pt_id: this.detalleSeleccionado.resultado_pt_id,
      estado: 'Aprobado',
      usuario_aprobador_id: 2,
      motivo_rechazo: '',
      referencia_sap: '',
    };

    console.log('Body a enviar:', body);

    this.postApproveTransfer(body);
  }

  rechazarTransferencia(): void {
    if (!this.detalleSeleccionado) {
      console.log('No hay transferencia seleccionada.');
      return;
    }
    const body = {
      pt_id: this.detalleSeleccionado.resultado_pt_id,
      estado: 'Rechazado',
      usuario_aprobador_id: 2,
      motivo_rechazo: 'Motivo de rechazo',
      referencia_sap: '',
    };

    console.log('Body a enviar:', body);

    this.postRejectTransfer(body);
  }

  postApproveTransfer(body: any): void {
    this.transferService.postUpdateTranfer([body]).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Aprobado:', res.data);
        window.alert('Transferencia aprobada con éxito!');
        this.getTransfer();
      },
      error: (err) => {
        console.log('Error:', err);
        window.alert('Error al aprobar la transferencia!');
      },
    });
  }

  postRejectTransfer(body: any): void {
    this.transferService.postUpdateTranfer([body]).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Rechazado:', res.data);
        window.alert('Transferencia rechazada con éxito!');
        this.getTransfer();
      },
      error: (err) => {
        console.log('Error:', err);
        window.alert('Error al rechazar la transferencia!');
      },
    });
  }

  abrirModal(item: any) {
    this.detalleSeleccionado = item;
    const modal = document.getElementById('detalleModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  cerrarModal() {
    const modal = document.getElementById('detalleModal');
    if (modal) {
      modal.classList.add('hidden');
      this.detalleSeleccionado = null;
    }
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updatePagedFiltro(): void {
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize, this.totalItems);
    this.pagedFiltro = this.filtro.slice(this.startIndex, this.endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedFiltro();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
