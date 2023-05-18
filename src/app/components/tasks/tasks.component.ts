import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  deleteSelectedTask(task: Task) {
    console.log(task, 'inside deleteselectedtask');
    this.taskService.deleteTask(task).subscribe((d) => {
      console.log(d, 'data');
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    console.log('add task');
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
