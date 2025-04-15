import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CustomDateFormatPipe } from '../../utils/formatDate';

@Component({
  selector: 'app-modal-detail',
  imports: [CommonModule, CustomDateFormatPipe],
  templateUrl: './modal-detail.component.html',
  styleUrl: './modal-detail.component.css',
})
export class ModalDetailComponent implements OnInit {
  @Input() detalleTransfer: any;

  ngOnInit(): void {
    console.log('detalleTransfer:', this.detalleTransfer);
  }
}
