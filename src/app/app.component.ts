import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularPractice';
  selectedId!: number;
  users!: User[];

  receiveSelectedId(recceivedId: number): void {
    this.selectedId = recceivedId;
    console.log('selectedID collected : ', this.selectedId);
  }

  receiveUsers(receivedUsers: User[]): void {
    this.users = receivedUsers;
  }
}
