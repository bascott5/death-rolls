import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'title-screen',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './title-screen.component.html',
    styleUrl: './title-screen.component.css'
})
export class TitleScreenComponent {
  constructor() {}
}
