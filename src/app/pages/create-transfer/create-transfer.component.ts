import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../components/atoms/nav/nav.component';
import { ResAlmacen } from '../../interfaces/IAlmacen';
import { ResTransferencia } from '../../interfaces/IListDetalleTransferencia';
import { ITransferReq } from '../../interfaces/ITransferCreate';
import { TransferService } from '../../services/api/transfer.service';
import { TransferStateServiceService } from '../../services/transfer-state-service.service';

@Component({
  selector: 'app-create-transfer',
  imports: [
    RouterLink,
    NavComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './create-transfer.component.html',
  styleUrl: './create-transfer.component.css',
})
export class CreateTransferComponent implements OnInit {
  nuevaTransferencia: ITransferReq = {
    almacen_origen_id: 0,
    almacen_destino_id: 0,
    monto_total: 0,
    usuario_creador_id: 1,
    centro_costo: '',
  };


  constructor(public transferService: TransferService, public stateService: TransferStateServiceService) {}

  transferencias: any;
  almacenes: any;
  nuevaTransferencias: any;

  ngOnInit(): void {
    this.transferencias = this.stateService.transferencia;
    this.almacenes = this.stateService.almacene;
    this.nuevaTransferencias = this.stateService.nuevaTransferencia;
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
        form.resetForm();
      },
      error: (err) => {
        console.error('Error al crear la transferencia:', err);
        window.alert('Error al realizar la transferencia!');
      },
    });
  }


  getTransfers(): void {
    this.transferService.getTransfer().subscribe({
      next: (res) => {
        this.stateService.setTransferencias(res.data);
        console.log('Transferencias cargadas:', this.transferencias());
      },
      error: (err) => {
        console.error('Error al cargar transferencias:', err);
      },
    });
  }

  getAlmacens(): void {
    this.transferService.getAlmacenes().subscribe({
      next: (res) => {
        this.stateService.setAlmacenes(res.data);
        console.log('Almacenes cargados:', this.almacenes());
      },
      error: (err) => {
        console.error('Error al cargar almacenes:', err);
      },
    });
  }

  postTransfers(form: NgForm): void {
    this.transferService.postTranfer(this.nuevaTransferencia).subscribe({
      next: (res) => {
        console.log('Transferencia creada:', res.data);
        window.alert('Transferencia realizada!');
        this.stateService.resetNuevaTransferencia();
        form.resetForm();
        this.getTransfer(); 
      },
      error: (err) => {
        console.error('Error al crear la transferencia:', err);
        window.alert('Error al realizar la transferencia!');
      },
    });
  }

  updateForm(field: keyof ITransferReq, value: any) {
    this.stateService.updateNuevaTransferencia({ [field]: value });
  }
}
