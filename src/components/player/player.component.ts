import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() name: string;
  @Input() currentTurn: boolean;
  @Input() val: number;
  points = 0;
  constructor() {}
}
