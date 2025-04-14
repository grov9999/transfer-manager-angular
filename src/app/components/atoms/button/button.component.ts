import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonColor = 'blue' | 'red' | 'gray';

// interface buttonProps {
//   name: string;
//   color?: ButtonColor;
//   onReturn?: EventEmitter<void>;
// }

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() name: string = '';
  @Input() color: ButtonColor = 'blue';
  @Output() onReturn: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    if (this.onReturn) {
      this.onReturn.emit();
    }
  }
}
