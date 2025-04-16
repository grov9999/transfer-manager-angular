import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../../interfaces/IListDetalleTransferencia';
import { ModalDetailComponent } from '../../../pages/modal-detail/modal-detail.component';
import { TransferService } from '../../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../../utils/formatDate';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-table',
  imports: [
    CustomDateFormatPipe,
    FormsModule,
    ModalDetailComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './transfer-table.component.html',
  styleUrl: './transfer-table.component.css',
})
export class TransferTableComponent implements OnInit {
  constructor(public transferService: TransferService) {}
  filtro: IListDetalleTransferencia[] = [];
  pagedFiltro: IListDetalleTransferencia[] = [];
  codigoFiltro: string = '';
  codigoBuscar: string = '';
  centroBuscar: string = '';
  montoDesdeBuscar: string = '';
  montoHastaBuscar: string = '';
  fechaDesdeBuscar: string = '';
  fechaHastaBuscar: string = '';
  estadoBuscar: string = '';

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
        this.buscarDetalle();
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
    this.updatePagination();
  }

  buscar(): void {
    this.currentPage = 1;
    this.buscarDetalle();
  }

  buscarDetalle(): void {
    this.filtro = this.transferService.transferencias.filter((item) => {
      const codigo =
        this.codigoBuscar.trim() === '' ||
        item.codigo.toLowerCase().includes(this.codigoBuscar.toLowerCase());

      const centroCosto =
        this.centroBuscar.trim() === '' ||
        (item.centro_costo &&
          item.centro_costo
            .toLowerCase()
            .includes(this.centroBuscar.toLowerCase()));
      const montoTotal = Number(item.monto_total);
      const montoDesde =
        this.montoDesdeBuscar.trim() === '' ||
        montoTotal >= parseFloat(this.montoDesdeBuscar);
      const montoHasta =
        this.montoHastaBuscar.trim() === '' ||
        montoTotal <= parseFloat(this.montoHastaBuscar);

      const estado =
        this.estadoBuscar.trim() === '' ||
        item.estado.toLowerCase() === this.estadoBuscar.toLowerCase();

      const fechaItem = new Date(item.fecha_generacion || DatePipe);
      const fechaDesde =
        this.fechaDesdeBuscar.trim() === '' ||
        fechaItem >= new Date(this.fechaDesdeBuscar);
      const fechaHasta =
        this.fechaHastaBuscar.trim() === '' ||
        fechaItem <= new Date(this.fechaHastaBuscar);

      return (
        codigo &&
        centroCosto &&
        montoDesde &&
        montoHasta &&
        fechaDesde &&
        fechaHasta &&
        estado
      );
    });
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalItems = this.filtro.length;
    this.calculateTotalPages();
    this.updatePagedFiltro();
  }

  detalleSeleccionado: any = null;
  detallesSeleccionados: any[] = [];

  onSelect(event: Event, item: any): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.detallesSeleccionados.push(item);
    } else {
      this.detallesSeleccionados = this.detallesSeleccionados.filter(
        (selected) => selected.codigo !== item.codigo
      );
    }
    console.log('Filas seleccionadas:', this.detallesSeleccionados);
  }

  aprobarTransferencias(): void {
    if (this.detallesSeleccionados.length === 0) {
      console.log('No hay transferencias seleccionadas.');
      return;
    }
    const bodies = this.detallesSeleccionados.map((item) => ({
      pt_id: item.resultado_pt_id,
      estado: 'Aprobado',
      usuario_aprobador_id: 2,
      motivo_rechazo: '',
      referencia_sap: '',
    }));

    console.log('body :', bodies);
    this.postApproveTransfer(bodies);
  }

  rechazarTransferencias(): void {
    if (this.detallesSeleccionados.length === 0) {
      console.log('No hay transferencias seleccionadas.');
      return;
    }
    const bodies = this.detallesSeleccionados.map((item) => ({
      pt_id: item.resultado_pt_id,
      estado: 'Rechazado',
      usuario_aprobador_id: 2,
      motivo_rechazo: 'Motivo de rechazo',
      referencia_sap: '',
    }));

    console.log('body :', bodies);
    this.postRejectTransfer(bodies);
  }

  postApproveTransfer(bodies: any[]): void {
    this.transferService.postUpdateTranfer(bodies).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Transferencias aprobadas:', res.data);
        window.alert('Transferencias aprobadas con éxito!');
        this.getTransfer();
        this.detallesSeleccionados = [];
      },
      error: (err) => {
        console.log('Error:', err);
        window.alert('Error al aprobar las transferencias!');
      },
    });
  }

  postRejectTransfer(bodies: any[]): void {
    this.transferService.postUpdateTranfer(bodies).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Transferencias rechazadas:', res.data);
        window.alert('Transferencias rechazadas con éxito!');
        this.getTransfer();
        this.detallesSeleccionados = [];
      },
      error: (err) => {
        console.log('Error:', err);
        window.alert('Error al rechazar las transferencias!');
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
