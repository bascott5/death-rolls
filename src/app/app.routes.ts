import { Routes } from '@angular/router';
import { TitleScreenComponent } from '../pages/title-screen/title-screen.component';
import { OfflineGameComponent } from '../pages/offline-game/offline-game.component';

export const routes: Routes = [
    { path: "", component: TitleScreenComponent },
    { path: "offline-game", component: OfflineGameComponent }
];
