import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-search',
  imports: [RouterLink, FormsModule],
  templateUrl: './transfer-search.component.html',
  styleUrl: './transfer-search.component.css'
})
export class TransferSearchComponent {
  searchTerm: string = '';

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.filterChange.emit(this.searchTerm);
  }
}
