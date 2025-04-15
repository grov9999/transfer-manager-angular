import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
