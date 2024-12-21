import { Injectable, signal } from '@angular/core';
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
    tasks = signal<Task[]>([]);

    onAddTask(taskData: {title: string, description:string}){
        const newTask = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN',
        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);

    }

}
