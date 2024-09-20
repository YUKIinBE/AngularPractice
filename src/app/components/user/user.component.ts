import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpUsersService } from '../../services/http-users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  @Input() users!: User[];
  @Output() selectedId!: number;

  myForm!: FormGroup;

  constructor(
    private _http: HttpUsersService,
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      
      selectedId: ['', [Validators.required, Validators.min(1), Validators.max(this.users.length)]]
    })
  }
}
