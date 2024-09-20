import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpUsersService } from '../../services/http-users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  @Input({required: true}) usersLength!: number;
  @Output() emitToParent: EventEmitter<number> = new EventEmitter<number>();

  selectedId!: number;
  myForm!: FormGroup;  

  constructor(
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      selectedId: ['', [Validators.required, Validators.min(1), Validators.max(this.usersLength)]]
    })
  }

  onEmit(): void {
    this.emitToParent.emit(this.selectedId);
    console.log('users.Length : ', this.usersLength);
    console.log(this.selectedId);
  }
}
