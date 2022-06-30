import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-trottinette',
  templateUrl: './trottinette.component.html',
  styleUrls: ['./trottinette.component.css']
})
export class TrottinetteComponent implements OnInit {

  trottinette: any;
  detailRecup : any
  waitInfo : boolean = false
  trottinetteCategory ="trottinette";

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getTrottine();
  }

  getTrottine(){
    this.productsservice.getbyCategoVehicule(this.trottinetteCategory).subscribe(data =>{
      this.trottinette = data
      console.log(this.trottinette);
      
    })
  }


  getDetail( t : any){
    this.waitInfo = true;
    this.detailRecup = t;
    
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

  }


}
