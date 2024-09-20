import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() emitToParent: EventEmitter<number> = new EventEmitter<number>();

  selectedId!: number;

  onEmit(): void {
    this.emitToParent.emit(this.selectedId);
  }
}
