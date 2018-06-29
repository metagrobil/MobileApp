import { Component } from '@angular/core';

/**
 * Generated class for the CommandComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'command',
  templateUrl: 'command.html'
})
export class CommandComponent {

  text: string;

  constructor() {
    console.log('Hello CommandComponent Component');
    this.text = 'CommandComponent';
  }

}
