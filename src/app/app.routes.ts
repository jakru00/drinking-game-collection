import { Routes } from '@angular/router';
import { PiccoloRootComponentComponent } from '../piccolo/root/piccolo-root-component/piccolo-root-component.component';
import { AppComponent } from './app.component';
import { DashboardRootComponent } from '../dashboard/root/dashboard-root/dashboard-root.component';

export const routes: Routes = [
    {
        path: 'piccolo', title: 'Piccolo', component: PiccoloRootComponentComponent,
    },
    {
        path: '', title: 'Drinking Game Collection', component: DashboardRootComponent,
    },
    { path: '**', redirectTo: '', },
];
