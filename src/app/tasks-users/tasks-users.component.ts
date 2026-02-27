import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../Type/users';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTask } from '../Type/task-type';
import {TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-users',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks-users.component.html',
  styleUrl: './tasks-users.component.css',
})
export class TasksUsersComponent {
  users = DUMMY_USERS; 

  @Input({ required: true }) userid!: string; 

  @Input({ required: true }) name!: string | undefined; 

  @Output() newTask = new EventEmitter<string>(); 

  addTask : boolean = false

  constructor(private taskService: TaskService) {}

  get userTasksSelected() {
    return this.taskService.getUserTasks(this.userid); 
  }

  onComplitedTask(id: string) {
    
  }

  addNewTask() {
    this.newTask.emit(this.userid); // Utilizzo il metodo emit per emettere un evento verso il componente padre quando viene aggiunto un nuovo task
    this.addTask = true
  }

  isTaskClosed(){
    this.addTask = false // Imposto la variabile addTask a false per chiudere il form
  }


}
