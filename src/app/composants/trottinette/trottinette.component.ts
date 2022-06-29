import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-trottinette',
  templateUrl: './trottinette.component.html',
  styleUrls: ['./trottinette.component.css']
})
export class TrottinetteComponent implements OnInit {

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
  }

}
