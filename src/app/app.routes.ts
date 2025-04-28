import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    }
];
