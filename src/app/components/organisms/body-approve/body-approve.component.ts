import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-body-approve',
  imports: [ButtonComponent],
  templateUrl: './body-approve.component.html',
  styleUrl: './body-approve.component.css'
})
export class BodyApproveComponent {
  buttonClicked = false;

  handleButtonClick() {
    this.buttonClicked = true;
    console.log('Button in parent component was clicked!');
    // Add your logic here
  }
}
