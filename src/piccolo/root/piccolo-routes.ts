import { Route } from "@angular/router";
import { PiccoloRootComponentComponent as PiccoloRootComponent } from "./piccolo-root/piccolo-root.component";
import { StartPageComponent } from "../features/start-page/components/start-page/start-page.component";
import { PlayerComponent } from "../features/players/components/player/player.component";

export const PICCOLO_ROUTES: Route[] = [
    {
        path: '', title: 'Piccolo', component: PiccoloRootComponent,
    },
    {
        path: 'home', title: 'Piccolo', component: StartPageComponent,
    },
    {
        path: 'players', title: 'Piccolo', component: PlayerComponent,
    }
]