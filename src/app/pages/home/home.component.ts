import { Component } from '@angular/core';
import { TransferSearchComponent } from "../../components/organisms/transfer-search/transfer-search.component";
import { TransferTableComponent } from "../../components/organisms/transfer-table/transfer-table.component";
import { NavComponent } from "../../components/atoms/nav/nav.component";

@Component({
  selector: 'app-home',
  imports: [TransferSearchComponent, TransferTableComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
