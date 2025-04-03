import { Component, HostListener } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'offline-game',
  standalone: true,
  imports: [PlayerComponent, ModalComponent, FormsModule, RouterLink],
  templateUrl: './offline-game.component.html',
  styleUrl: './offline-game.component.css'
})
export class OfflineGameComponent {
  playerTurn: boolean;
  playerVal = 1000;
  computerVal = 1000;
  rollVal = 1000;

  isModalOpen = true;
  isInteractable = true;
  betting = true;
  bet = 1;

  points = 10;
  constructor() {}

  startGame(): void {
    this.isModalOpen = false;
    this.isInteractable = false;
    this.playerTurn = 
    this.rng(2) == 2 ? true : false;
    
    let counter = 0;
    let animation = setInterval(() => {
      this.playerTurn = !this.playerTurn

      counter++;
      if (counter == 4) {
        if (!this.playerTurn) {
          this.handleComputerRoll();
        }

        clearInterval(animation);
      }
    }, 500);

    let timeBeforeInteract = setTimeout(() => {
      this.isInteractable = true;
      clearTimeout(timeBeforeInteract);
    }, 2000)
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
    if (event.code === 'Space' && this.isInteractable) {
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
