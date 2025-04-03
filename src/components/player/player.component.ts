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
  @Input() isPlayer: boolean;
  @Input() currentTurn: boolean;
  @Input() isModalOpen: boolean;
  @Input() val: number;
  @Input() points: number;
  constructor() {}
}
