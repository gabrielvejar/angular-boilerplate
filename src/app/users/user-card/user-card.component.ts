import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Output() hi: EventEmitter<string> = new EventEmitter<string>();
}
