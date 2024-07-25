import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

interface Task {
  myTask: string;
  check: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public myTask: string = '';
  public editTaskValue: string = '';
  public editStatus: boolean = false;
  public tasks: Task[] = [
    { myTask: 'HTML', check: true },
    { myTask: 'CSS3', check: true },
    { myTask: 'SCSS', check: false },
    { myTask: 'JavaScript', check: false },
    { myTask: 'jQuery', check: false },
    { myTask: 'Angular', check: false }
  ];
  private editIndex: number | null = null; // Зберігає індекс редагованого завдання

  addTask() {
    if (this.myTask) {
      this.tasks.push({ myTask: this.myTask, check: false });
      this.myTask = '';
    }
  }

  editTask(index: number) {
    const task = this.tasks[index];
    this.editStatus = true;
    this.editIndex = index;
    if (task) {
      this.editTaskValue = task.myTask;
    }
  }

  saveTask() {
    if (this.editIndex !== null) {
      this.tasks[this.editIndex].myTask = this.editTaskValue;
      this.editTaskValue = '';
      this.editStatus = false;
      this.editIndex = null;
    }
  }

  deleteTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}