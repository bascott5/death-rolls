import { Component, HostListener } from '@angular/core';
import { OpponentComponent } from "../../components/opponent/opponent.component";
import { PlayerComponent } from "../../components/player/player.component";
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'offline-game',
  standalone: true,
  imports: [OpponentComponent, PlayerComponent, ModalComponent, FormsModule, RouterLink],
  templateUrl: './offline-game.component.html',
  styleUrl: './offline-game.component.css'
})
export class OfflineGameComponent {
  playerTurn: boolean;
  playerVal = 1000;
  computerVal = 1000;
  rollVal = 1000;

  isModalOpen = true;
  betting = true;
  bet = 1;

  points = 10;
  constructor() {}

  startGame(): void {
    this.isModalOpen = false;
    this.playerTurn = 
    this.rng(2) == 2 ? true : false;

    if (!this.playerTurn) {
      this.roll();
    }
  }

  resetGame(): void {
    this.bet = 1;
    this.playerVal = 1000;
    this.computerVal = 1000;
    this.rollVal = 1000;
    this.betting = true;
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
      if (this.playerTurn) {
        this.points += this.bet;
      } else {
        this.points -= this.bet;
      }

      this.betting = false;
      this.isModalOpen = true;
    }
  }

  private rng(nSides: number): number {
    return Math.floor(Math.random() * nSides) + 1;
  }

  handlePlayerRoll(): void {
    if (this.playerTurn && !this.isModalOpen) {
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
    if (!this.playerTurn && !this.isModalOpen) {
      let timer = setTimeout(() => {
        this.roll();
        clearTimeout(timer);
      }, 1000);
    }
  }
}
