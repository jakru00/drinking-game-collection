import { Routes } from '@angular/router';

const defaultRoute = 'piccolo';

export const routes: Routes = [
    {
        path: defaultRoute,
        title: defaultRoute,
        loadChildren: () => 
          import('../piccolo/piccolo-routes')
          .then((piccoloGame) => piccoloGame.PICCOLO_ROUTES)
    },
    {
        path: '', pathMatch: 'full', redirectTo: defaultRoute
    },
    { path: '**', redirectTo: defaultRoute, },
];
