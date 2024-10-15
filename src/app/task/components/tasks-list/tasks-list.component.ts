import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../types/task';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor, NgIf, TaskItemComponent, AsyncPipe],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  //================Observables
  tasks$: Observable<ITask[]> = this._taskService.getAllTasks();

  constructor(private _taskService: TaskService) {}

  toggleCompletion(task: ITask): void {
    task.completed = !task.completed;
  }
}
