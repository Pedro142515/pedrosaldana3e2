import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedTasks'
})
class CompletedTasksPipe implements PipeTransform {
  transform(tasks: any[]): any[] {
    return tasks.filter(task => task.completed);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CompletedTasksPipe],
  exports: [CompletedTasksPipe]
})
class DirectivesModule { }

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, CommonModule, DirectivesModule],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  
  tasks: Task[] = [];
  newTaskText: string = '';
  showCompletedTasks = false; // Controla la visibilidad de tareas completadas

  constructor() { }

  addTask() {
    if (this.newTaskText.trim() !== '') {
      this.tasks.push({ text: this.newTaskText, completed: false });
      this.newTaskText = '';
    }
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks = this.tasks.filter(t => t !== task);
    }
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }

  toggleFilterTasks() {
    this.showCompletedTasks = !this.showCompletedTasks;
  }

  getTasks() {
    return this.showCompletedTasks ? this.tasks.filter(task => task.completed) : this.tasks;
  }

  onKeyDown(event: any) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}

interface Task {
  text: string;
  completed: boolean;
}