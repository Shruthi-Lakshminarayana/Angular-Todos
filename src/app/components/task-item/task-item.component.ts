import { Component, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;
  onDelete(task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    console.log(task);
    this.onToggleReminder.emit(task);
  }
}
