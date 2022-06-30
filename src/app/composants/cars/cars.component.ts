import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

Cars: any;
 detailRecup : any
 waitInfo : boolean = false
 carsCategory = "voiture";

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
  this.getCars();
  }

  getCars(){
    this.productsservice.getbyCategoVehicule(this.carsCategory).subscribe(data =>{
      this.Cars = data
      console.log(this.Cars);
      
    })
  }
  

  getDetail(c : any){
    this.waitInfo = true;
    this.detailRecup = c;
    
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

    
    
  }

}
