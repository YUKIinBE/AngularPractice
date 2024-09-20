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
  usersLength!: number;

  receiveSelectedId(recceivedId: number): void {
    this.selectedId = recceivedId;
    console.log('app.component selectedID collected : ', this.selectedId);
  }
}
