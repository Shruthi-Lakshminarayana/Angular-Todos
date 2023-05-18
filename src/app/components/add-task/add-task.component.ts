import { Component, Output, EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() addTaskToList: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  addTask() {
    if (!this.text) {
      alert('Please Enter the Task!');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.addTaskToList.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
