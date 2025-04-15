import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../components/atoms/nav/nav.component';
import { ResTransferencia } from '../../interfaces/IListDetalleTransferencia';
import { TransferService } from '../../services/api/transfer.service';
import { ResAlmacen } from '../../interfaces/IAlmacen';
import { ITransferReq } from '../../interfaces/ITransferCreate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-transfer',
  imports: [RouterLink, NavComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './create-transfer.component.html',
  styleUrl: './create-transfer.component.css',
})
export class CreateTransferComponent implements OnInit {
  // createForm: FormGroup;
  // monto: FormControl;
  // costo: FormControl;

  nuevaTransferencia: ITransferReq = {
    almacen_origen_id: 0,
    almacen_destino_id: 0,
    monto_total: 0,
    usuario_creador_id: 1,
    centro_costo: '',
  };

  constructor(public transferService: TransferService) {
    // this.monto = new FormControl(0, [Validators.required, Validators.min(1)]);
    // this.costo = new FormControl('', Validators.required);
    // this.createForm = new FormGroup({
    //   monto: this.monto,
    //   costo: this.costo,
    // });
  }

  ngOnInit(): void {
    this.getTransfer();
    this.getAlmacen();
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

  getAlmacen(): void {
    this.transferService.getAlmacenes().subscribe({
      next: (res: ResAlmacen) => {
        this.transferService.almacenes = res.data;
        console.log('data:', this.transferService.almacenes);
      },
      error: (err: ResAlmacen) => {
        console.log('error:', this.transferService.almacenes);
      },
    });
  }

  postTransfer(form: NgForm): void {
    this.transferService.postTranfer(this.nuevaTransferencia).subscribe({
      next: (res: ResTransferencia) => {
        console.log('Transferencia creada:', res.data);
        window.alert('Transferencia realizada!');
        form.resetForm()
      },
      error: (err) => {
        console.error('Error al crear la transferencia:', err);
        window.alert('Error al realizar la transferencia!');
      },
    });
  }
}
