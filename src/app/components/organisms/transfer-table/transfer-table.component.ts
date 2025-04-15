import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IListDetalleTransferencia,
  ResTransferencia,
} from '../../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../../utils/formatDate';
import { ModalDetailComponent } from "../../../pages/modal-detail/modal-detail.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer-table',
  imports: [CustomDateFormatPipe, FormsModule, ModalDetailComponent,CommonModule],
  templateUrl: './transfer-table.component.html',
  styleUrl: './transfer-table.component.css',
})
export class TransferTableComponent implements OnInit {

  constructor(public transferService: TransferService) {}
  filtro: IListDetalleTransferencia[] = [];
  pagedFiltro: IListDetalleTransferencia[] = [];
  codigoFiltro = '';

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
          console.log('Error al eliminar la transferencia:', err);
          window.alert('Error al eliminar la transferencia!');
        },
      });
    }
  }

  detalleSeleccionado: any = null;

  // mostrarDetalle(item: any) {
  //   this.detalleSeleccionado = item;
  //   console.log('Item seleccionado:', this.detalleSeleccionado);
  // }

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
