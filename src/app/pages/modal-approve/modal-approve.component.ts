import { Component } from '@angular/core';
import { HeaderApproveComponent } from '../../components/organisms/header-approve/header-approve.component';
import { BodyApproveComponent } from "../../components/organisms/body-approve/body-approve.component";

@Component({
  selector: 'app-modal-approve',
  imports: [HeaderApproveComponent, BodyApproveComponent],
  templateUrl: './modal-approve.component.html',
  styleUrl: './modal-approve.component.css'
})
export class ModalApproveComponent {

}
