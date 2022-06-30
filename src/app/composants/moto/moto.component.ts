import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  Motos: any;
  detailRecup : any
  waitInfo : boolean = false
  motoCategory = "moto";

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getMotos();
  }


  getMotos(){
    this.productsservice.getbyCategoVehicule(this.motoCategory).subscribe(data =>{
      this.Motos = data
      console.log(this.Motos);
      
    })
  }

  getDetail(c : any){
    this.waitInfo = true;
    this.detailRecup = c;
    
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

  }

}
