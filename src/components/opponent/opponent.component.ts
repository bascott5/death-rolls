import { Component, Input } from '@angular/core';

@Component({
  selector: 'opponent',
  standalone: true,
  imports: [],
  templateUrl: './opponent.component.html',
  styleUrl: './opponent.component.css'
})
export class OpponentComponent {
  @Input() name: string;
  @Input() currentTurn: boolean;
  @Input() val: number;
  @Input() points: number;
  constructor() {}
}
