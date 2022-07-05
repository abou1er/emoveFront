import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit {
  cars: any;
  allProducts: any;
  detailRecup : any;
  waitInfo : boolean = false;
  allCategory = ["voiture" , "moto","trottinette"];
  carsCategory = "voiture";
  motoCategory = "moto";
  trottinetteCategory ="trottinette";

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getallProducts()
  }

  getallProducts(){
    
    this.adminService.getAll().subscribe(data =>{
      this.allProducts = data
      console.log(this.allProducts);

    })
  }

  getDetail(c : any){
    this.waitInfo = true;
    this.detailRecup = c;
    
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

  }

}
