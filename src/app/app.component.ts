import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './Type/users';
import { TasksUsersComponent } from "./tasks-users/tasks-users.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS; // Importo l'array di utenti da users.ts
  
  selectedUser :  { id: string; name: string; avatar: string } | undefined = undefined; // Variabile per memorizzare l'utente selezionato

  onSelectedUser(id: string) {
  const selected =  this.users.find( user => user.id === id) //con selected prendo l'utente selezionato in base all'id passato dal componente figlio per poi associarlo alla variabile selectedUser
   console.log('Selected User ID:', id); 
   
   this.selectedUser = selected
}



}
