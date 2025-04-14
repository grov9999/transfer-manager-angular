import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../components/atoms/nav/nav.component';
import { ResTransferencia } from '../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../services/api/transfer.service';

@Component({
  selector: 'app-create-transfer',
  imports: [RouterLink, NavComponent, ReactiveFormsModule],
  templateUrl: './create-transfer.component.html',
  styleUrl: './create-transfer.component.css',
})
export class CreateTransferComponent implements OnInit {
  constructor(public transferService: TransferService) {}

  ngOnInit(): void {}

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
