import { Routes } from '@angular/router';
import { PiccoloRootComponentComponent } from '../piccolo/root/piccolo-root-component/piccolo-root-component.component';

export const routes: Routes = [
    {
        path: '', title: 'Piccolo', component: PiccoloRootComponentComponent,
    },
    { path: '**', redirectTo: '', },
];
