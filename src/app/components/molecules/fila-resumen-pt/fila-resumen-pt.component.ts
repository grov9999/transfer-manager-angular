import { Component, Input } from '@angular/core';
import { IListDetalleTransferencia } from '../../../interfaces/IListDetalleTransferencia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fila-resumen-pt',
  imports: [CommonModule],
  templateUrl: './fila-resumen-pt.component.html',
  styleUrl: './fila-resumen-pt.component.css'
})
export class FilaResumenPTComponent {
  @Input() transferencia: IListDetalleTransferencia = {
    codigo: "", 
    fecha_generacion: new Date(),
    monto_total:"",
    centro_costo:""
  }
}
