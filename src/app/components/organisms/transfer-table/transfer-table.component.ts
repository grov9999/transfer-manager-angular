import { Component, OnInit } from '@angular/core';
import { ResTransferencia } from '../../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../../services/api/transfer.service';
import { CustomDateFormatPipe } from '../../../utils/formatDate';

@Component({
  selector: 'app-transfer-table',
  imports: [CustomDateFormatPipe],
  templateUrl: './transfer-table.component.html',
  styleUrl: './transfer-table.component.css'
})
export class TransferTableComponent implements OnInit{
    constructor(public transferService: TransferService) {}
  
    ngOnInit(): void {
      this.getTransfer();
    }
  
    getTransfer(){
      this.transferService.getAll().subscribe({
        next: (data) => {
          this.transferService.transferencias = data;
          console.log(data);
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
}
