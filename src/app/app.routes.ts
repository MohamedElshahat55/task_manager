import { Routes } from '@angular/router';
import { TaskItemComponent } from './task/components/task-item/task-item.component';
import { TasksListComponent } from './task/components/tasks-list/tasks-list.component';

export const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'task/:id', component: TaskItemComponent },
];
