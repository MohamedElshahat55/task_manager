import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable, take } from 'rxjs';
import { ITask } from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  // GET ALL TASKS
  getAllTasks(): Observable<ITask[]> {
    return this._http
      .get<ITask[]>(`${this.apiUrl}/todos`)
      .pipe(map((tasks) => tasks.slice(0, 10)));
  }
}
