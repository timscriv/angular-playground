import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #myInput type="text">
      <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value){
    console.log(event, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
