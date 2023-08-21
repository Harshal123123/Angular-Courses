import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
  source: string = 'https://www.shopweb.in/images/imageforecommercewebsite.jpg';
  getSlogan() {
    return 'This is a new slogan Method for this web application';
  }
}
