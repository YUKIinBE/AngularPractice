import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpUsersService } from '../../services/http-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  @Input() selectedId!: number;
  @Output() emitToParent: EventEmitter<number> = new EventEmitter<number>();
  
  users!: User[];

  constructor(private _http: HttpUsersService){}

  ngOnInit(): void {
    this._http.get().subscribe((data) => this.users = data)
  }

  onEmit(): void {
    this.emitToParent.emit(this.users.length)
    console.log('users.Length : ', this.users.length);
  }
}
