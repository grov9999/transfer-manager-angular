import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/api/transfer.service';
import { ResTransferencia } from '../../interfaces/IListDetalleTransferencia';
import { TransferSearchComponent } from '../../components/organisms/transfer-search/transfer-search.component';
import { TransferTableComponent } from '../../components/organisms/transfer-table/transfer-table.component';
import { NavComponent } from '../../components/atoms/nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [TransferSearchComponent, TransferTableComponent,NavComponent],
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


  // deleteTransfer(id: string):void {
  //   this.transferService.deleteTransfer(id).subscribe({
  //     next:() => {
  //       console.log('Transferencia eliminada');
  //     },
  //     error:(err) => {
  //       console.log(err);

  //     },
  //   })
  // }
}
