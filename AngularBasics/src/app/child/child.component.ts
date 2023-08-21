import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // @Input() inputMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  sendMessge() {
    this.messageEvent.emit('Hello from Child');
  }
}
