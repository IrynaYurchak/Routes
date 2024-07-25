import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CenzorComponent } from './cenzor/cenzor.component';
import { UserListComponent } from './user-list/user-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChildComponent } from './task-list/child/child.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterModule, CenzorComponent, UserListComponent, TaskListComponent, ChildComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']

})
export class WorksComponent { }