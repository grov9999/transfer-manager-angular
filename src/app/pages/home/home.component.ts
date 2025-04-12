import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/api/transfer.service';
import { ResTransferencia } from '../../interfaces/IListDetalleTransferencia';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  constructor(public transferService: TransferService) {}

  ngOnInit(): void {
    this.getTransfer();
  }

  getTransfer(): void {
    this.transferService.getTransfer().subscribe({
      next: (res: ResTransferencia) => {
        this.transferService.transferencias = res.data;
        console.log('data:', this.transferService.transferencias);
      },
      error: (err: ResTransferencia) => {
        console.log('error:', this.transferService.transferencias);
      },
    });
  }

  getTransferId(id: number) {
    this.transferService.getTransferId(id).subscribe({
      next: (res: ResTransferencia) => {
        this.transferService.transferencias = res.data;
        // console.log('data:', this.transferService.transferencias);
      },
      error: (err: ResTransferencia) => {
        console.log('error:', this.transferService.transferencias);
      },
    });
  }
}
