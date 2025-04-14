import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-text-area',
  imports: [CommonModule],
  templateUrl: './card-text-area.component.html',
  styleUrl: './card-text-area.component.css'
})
export class CardTextAreaComponent {
  @Input() label: string = ''; 
  @Input() isDisable: boolean = false;
  @Input() tipo: string = '';
  @Input() detalleTransfer: string = ''; 
  @Input() padding: boolean = true;

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  handleInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.onChange.emit(value);
  }
}
