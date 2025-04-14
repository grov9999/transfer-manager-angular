import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fila-resumen-total',
  imports: [CommonModule],
  templateUrl: './fila-resumen-total.component.html',
  styleUrl: './fila-resumen-total.component.css'
})
export class FilaResumenTotalComponent {
  @Input() total: number = 0;
}
