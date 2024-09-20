import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpUsersService } from '../../services/http-users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  @Output() emitToParent: EventEmitter<number> = new EventEmitter<number>();

  myForm!: FormGroup;  

  constructor(
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      selectedId: ['', [Validators.required, Validators.min(1)]]
    })


  }

  onEmit(): void {
    this.myForm.markAllAsTouched()

    if (this.myForm.valid)
      this.emitToParent.emit(this.myForm.controls['selectedId'].value);
    console.log(this.myForm.controls['selectedId'])
  }
}
