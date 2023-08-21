import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'attribut-directive';

  active: boolean = true;

  display: boolean = false;

  occupation: string = '';

  displayNotice() {
    this.display = true;
  }
}
