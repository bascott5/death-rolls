import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'title-screen',
  standalone: true,
  imports: [RouterLink, ModalComponent],
  templateUrl: './title-screen.component.html',
  styleUrl: './title-screen.component.css'
})
export class TitleScreenComponent {
  isBettingOpen: boolean = false;
  isInstructionsOpen: boolean = false;
  constructor() {}

  openModal(mode: string) {
    switch (mode) {
      case "betting":
        this.isBettingOpen = true;
        break;
      case "instructions":
        this.isInstructionsOpen = true;
        break;
      default:
        break;
    }
  }

  closeModal(mode: string) {
    switch (mode) {
      case "betting":
        this.isBettingOpen = false;
        break;
      case "instructions":
        this.isInstructionsOpen = false;
        break;
      default:
        break;
    }
  }
}
