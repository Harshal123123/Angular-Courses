import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  selectedCustomer: any;

  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Harshal',
      address: 'uttam nagar',
      city: 'Nashik',
      country: 'India',
    },
    {
      customerNo: 2,
      name: 'Jayesh',
      address: 'pathardi',
      city: 'Dhule',
      country: 'India',
    },
    {
      customerNo: 1,
      name: 'Varun',
      address: 'trimurti',
      city: 'Jalgaon',
      country: 'India',
    },
    {
      customerNo: 1,
      name: 'Shubham',
      address: 'Balewadi',
      city: 'Pune',
      country: 'India',
    },
    {
      customerNo: 1,
      name: 'Jack',
      address: 'Behrain',
      city: 'Behrain',
      country: 'Dubai',
    },
  ];
}
