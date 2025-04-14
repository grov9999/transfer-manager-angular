import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-transfer',
  imports: [CommonModule],
  templateUrl: './select-transfer.component.html',
  styleUrl: './select-transfer.component.css'
})
export class SelectTransferComponent {
  @Input() id: string = ''; // ID único del select
  @Input() value: string = ''; // Valor seleccionado actualmente
  @Input() label: string = ''; // Etiqueta del select
  @Input() options: { value: string; label: string }[] = []; // Opciones del select

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Evento para cambios en el valor seleccionado

  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(selectedValue); // Emitir el nuevo valor seleccionado
  }
}
