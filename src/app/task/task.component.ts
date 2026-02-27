import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Task } from '../Type/task-type';
import { CardComponent } from "../shered/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() complited = new EventEmitter<string>();

  constructor(private taskService:TaskService  ) {}
  


  complitedTask(id: string) {
   return this.taskService.removeTask(id)// Utilizzo il metodo emit per emettere un evento verso il componente padre quando il task viene completato
}

}
