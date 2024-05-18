import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Piccolo',
        loadChildren: () => 
          import('../piccolo/root/piccolo-routes')
          .then((piccoloGame) => piccoloGame.PICCOLO_ROUTES)
    },
    { path: '**', redirectTo: '', },
];
