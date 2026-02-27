import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';


import { CardComponent } from "../shered/card/card.component";
import { UserType } from '../Type/user-type';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // imput tramite i segnali

  // avatar = input.required<string>()
  // name = input.required<string>()
  // userPath = computed(() => 'assets/' + this.userSelected().avatar)
  // (ricordarsi di inserire le parentesi tonde nell'html per il passaggio dei valori tramite i segnali)

  // ----------------------------------------------------------------------
  @Input({ required: true }) user!: UserType       // creazione di una proprietà di input che accetta un oggetto con le proprietà id, avatar e name che verranno passate dal componente padre 
  
  @Input({ required: true }) selected!: boolean; 
  @Output() userSelected = new EventEmitter<string>(); // Utilizzo il decoratore @Output per indicare che questa proprietà può essere utilizzata per emettere eventi verso il componente padre;

  get userPath() {
    //utilizzando il get posso creare un metodo che posso utilizzare come proprietà, quindi non ho bisogno di chiamarlo come una funzione ma come una proprietà
    return 'assets/' + this.user.avatar; // Creo una proprietà che mi restituisce il percorso dell'immagine dell'utente selezionato
  }

  onSelectUser() {
    this.userSelected.emit(this.user.id); // Utilizzo il metodo emit per emettere un evento verso il componente padre quando l'utente viene selezionato
  }
}








































































function newEventEmitter<T>() {
  throw new Error('Function not implemented.');
}
// METODO PE SELEZIONARE UN UTENTE CASUALE DALL'ARRAY DUMMY_USERS

//VERSIONE SENZA SEGNALI

// const random = Math.floor(Math.random() * DUMMY_USERS.length); // Genera un numero casuale tra 0 e la lunghezza dell'array DUMMY_USERS per selezionare un utente casuale

// userSelected = DUMMY_USERS[random]; // Riesco ad utilizzare la variabile DUMMY_USERS importata da users.ts dandogli il dato che mi servirà per prendere i singoli utenti in maniera dinamica

// get userPath() {
//   //utilizzando il get posso creare un metodo che posso utilizzare come proprietà, quindi non ho bisogno di chiamarlo come una funzione ma come una proprietà
//   return 'assets/' + this.userSelected.avatar; // Creo una proprietà che mi restituisce il percorso dell'immagine dell'utente selezionato
// }

//   onSelectUser() {
//     const random = Math.floor(Math.random() * DUMMY_USERS.length);

//     this.userSelected = DUMMY_USERS[random];
//   }
// }

//VERSIONE CON SEGNALI

// I segnali sono un contenitore che può contenere un valore e che può essere osservato per rilevare i cambiamenti. In Angular, i segnali sono utilizzati per creare proprietà reattive che possono essere aggiornate in modo reattivo.

//   userSelected = signal(DUMMY_USERS[random]); // Utilizzo i segnali per creare una proprietà reattiva che mi permette di aggiornare l'utente selezionato in modo reattivo
//   userPath = computed(() => 'assets/' + this.userSelected().avatar) // Utilizzo il metodo computed per creare una proprietà reattiva che mi restituisce il percorso dell'immagine dell'utente selezionato

//   onSelectUser() {
//     const random = Math.floor(Math.random() * DUMMY_USERS.length);

//     this.userSelected.set(DUMMY_USERS[random]); // Utilizzo il metodo set del segnale per aggiornare l'utente selezionato
//   }

// }
