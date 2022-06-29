import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
  }

}
