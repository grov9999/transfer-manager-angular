import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-transfer-search',
  imports: [RouterLink, FormsModule],
  templateUrl: './transfer-search.component.html',
  styleUrl: './transfer-search.component.css'
})
export class TransferSearchComponent {

  constructor(private busquedaService: FilterService) {}

  buscarCosto(valor: string): void {
    this.busquedaService.actualizarTerminoBusqueda(valor);

  }
}
