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
  isInstructionsOpen: boolean = false;
  constructor() {}

  openInstructions() {
    this.isInstructionsOpen = true;
  }

  closeInstructions() {
    this.isInstructionsOpen = false;
  }
}
