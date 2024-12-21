import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
selectedFilter = signal<string>('all');
tasks = [];

onChangeTaskFilter(filter: string){
  this.selectedFilter.set(filter)
}
}
