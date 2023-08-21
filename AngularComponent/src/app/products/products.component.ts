import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Harshal',
      price: '109',
      color: 'Black',
      available: 'Available',
    },
    {
      id: 2,
      name: 'jayesh',
      price: '101',
      color: 'White',
      available: 'Not Available',
    },
    {
      id: 3,
      name: 'Shubham',
      price: '10',
      color: 'Black',
      available: 'Available',
    },
    {
      id: 4,
      name: 'Raj',
      price: '19',
      color: 'White',
      available: 'Not Available',
    },
    {
      id: 5,
      name: 'Varun',
      price: '190',
      color: 'Black',
      available: 'Available',
    },
    {
      id: 6,
      name: 'Akshay',
      price: '119',
      color: 'Black',
      available: 'Not Available',
    },
  ];
  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
