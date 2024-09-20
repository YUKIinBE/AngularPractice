import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpUsersService } from '../../services/http-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnChanges{

  @Input() selectedId!: number;
  
  users!: User[];

  constructor(private _http: HttpUsersService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['selectedId'].currentValue) {
      this._http.getById(+changes['selectedId'].currentValue).subscribe((data) => {
      this.users = [data]
    })
  }
  }

  ngOnInit(): void {

    this._http.get().subscribe((data) => this.users = data)
    console.log('else is excuted');
  }
}
