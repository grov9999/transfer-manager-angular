import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-search',
  imports: [RouterLink, FormsModule],
  templateUrl: './transfer-search.component.html',
  styleUrl: './transfer-search.component.css'
})
export class TransferSearchComponent {
  codigo = '';
  estado = '';
  centroCostoFiltro = '';
  montoDesdeFiltro = '';
  montoHastaFiltro = '';
  fechaDesdeFiltro: string | null = null;
  fechaHastaFiltro: string | null = null;

  @Output() searchCriteriaChanged = new EventEmitter<{
    codigo: string;
    estado: string;
    centroCosto: string;
    montoDesde: string;
    montoHasta: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
  }>();

  emitSearchCriteria(): void {
    this.searchCriteriaChanged.emit({
      codigo: this.codigo,
      estado: this.estado,
      centroCosto: this.centroCostoFiltro,
      montoDesde: this.montoDesdeFiltro,
      montoHasta: this.montoHastaFiltro,
      fechaDesde: this.fechaDesdeFiltro,
      fechaHasta: this.fechaHastaFiltro,
    });
  }

  // Puedes llamar a emitSearchCriteria() en los eventos de los inputs
  onCodigoInput(): void {
    this.emitSearchCriteria();
  }

  onEstadoChange(): void {
    this.emitSearchCriteria();
  }

  // ... y así sucesivamente para los demás campos ...

  onLimpiarFiltros(): void {
    this.codigo = '';
    this.estado = '';
    this.centroCostoFiltro = '';
    this.montoDesdeFiltro = '';
    this.montoHastaFiltro = '';
    this.fechaDesdeFiltro = null;
    this.fechaHastaFiltro = null;
    this.emitSearchCriteria(); // Emitir criterios vacíos para mostrar todos los resultados
  }
}
