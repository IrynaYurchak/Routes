import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { ChildComponent } from './works/task-list/child/child.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'task-list', component: TaskListComponent, children: [
      { path: 'child', component: ChildComponent }
    ]}
  ]}
];