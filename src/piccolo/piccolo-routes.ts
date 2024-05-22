import { Route } from "@angular/router";
import { StartComponent } from "./components/start/start.component";
import { PlayerComponent } from "./components/player/player.component";
import { TaskComponent } from "./components/task/task.component";

export const PICCOLO_ROUTES: Route[] = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home',
    },
    {
        path: 'home', title: 'Piccolo', component: StartComponent,
    },
    {
        path: 'players', title: 'Piccolo', component: PlayerComponent,
    },
    {
        path: 'game', title: 'Piccolo', component: TaskComponent,
    },
]