import { Route } from "@angular/router";
import { PlayerComponent } from "../features/players/components/player/player.component";
import { StartComponent } from "../features/start/components/start/start.component";
import { TaskComponent } from "../features/tasks/components/task/task.component";

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