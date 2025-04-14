import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

interface TextAreaProps {
  isDisable?: boolean;
  tipo: string;
  detalleTransfer?: string;
  control?: FormControl; // Para usar con FormGroup
  onChange?: EventEmitter<string>;
}


@Component({
  selector: 'app-text-area',
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent{
  @Input() isDisable: boolean = false;
  @Input() tipo: string = '';
  @Input() detalleTransfer: string = '';
}
