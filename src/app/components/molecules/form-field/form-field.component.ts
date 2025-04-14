import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {
  @Input() disabled: boolean = false; 
  @Input() texto: string = '';
  @Input() color: boolean = false;
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() errors: string | null = null;
}
