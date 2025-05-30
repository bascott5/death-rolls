import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() open: boolean;
}
