import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string; // ID dell'utente a cui il task sarà associato
  @Output() newTaskClosed = new EventEmitter<void>(); // Evento per notificare la chiusura del form


  constructor( private taskService: TaskService) {}

  

  isEnteredTitle = ""
  isEnteredSummary = ""
  isEnteredDueDate = ""



  onClosedTask(){
    this.newTaskClosed.emit() // Imposto la variabile a true per chiudere il form
    
  }

  onSubmit(){
   this.taskService.addTask({
    title: this.isEnteredTitle,
    summary: this.isEnteredSummary,
    dueDate: this.isEnteredDueDate
   
   }, this.userId);
    this.newTaskClosed.emit()
  } 

}
