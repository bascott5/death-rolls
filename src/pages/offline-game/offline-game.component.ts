import { Component, HostListener, OnInit } from '@angular/core';
import { OpponentComponent } from "../../components/opponent/opponent.component";
import { PlayerComponent } from "../../components/player/player.component";

@Component({
  selector: 'offline-game',
  standalone: true,
  imports: [OpponentComponent, PlayerComponent],
  templateUrl: './offline-game.component.html',
  styleUrl: './offline-game.component.css'
})
export class OfflineGameComponent implements OnInit {
  playerTurn: boolean;
  gameOver = false;
  playerVal = 1000;
  computerVal = 1000;
  rollVal = 1000;
  bet = 0;
  constructor() {}

  ngOnInit(): void {
    this.playerTurn = 
    this.rng(2) == 2 ? true : false;

    if (!this.playerTurn) {
      this.roll();
    }
  }

  private roll(): void {
    this.rollVal = this.rng(this.rollVal);

    if (this.playerTurn) {
      this.playerVal = this.rollVal;
    } else {
      this.computerVal = this.rollVal;
    }

    this.playerTurn = !this.playerTurn;

    if (this.rollVal == 1) {
      this.gameOver = true;
    }
  }

  private rng(nSides: number): number {
    return Math.floor(Math.random() * nSides) + 1;
  }

  handlePlayerRoll(): void {
    if (this.playerTurn && !this.gameOver) {
      this.roll();
      this.handleComputerRoll();
    }
  }
  
  @HostListener('document:keyup', ['$event']) 
  handleSpacebar(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.handlePlayerRoll();
    }
  }

  private handleComputerRoll(): void {
    if (!this.playerTurn && !this.gameOver) {
      let timer = setTimeout(() => {
        this.roll();
        clearTimeout(timer);
      }, 1000);
    }
  }
}
