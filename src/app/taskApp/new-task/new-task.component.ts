import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  constructor(private taskService: TaskService) {}
  onAddTask(title: string, desc: string) {
    this.taskService.onAddTask({title, description:desc})
    this.formEl()?.nativeElement.reset();
  }
}
