import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cars: any;
  allProducts: any;
  detailRecup: any;
  waitInfo: boolean = false;
  allCategory = ["voiture", "moto", "trottinette"];
  carsCategory = "voiture";
  motoCategory = "moto";
  trottinetteCategory = "trottinette";

  MotCle = ""

  p: number = 0;

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getallProducts()

  }


  // ***** méthode Pagination ****************
  pageChange($event: any) {
    this.p = $event
    document.documentElement.scrollTop = 0
  }


  getallProducts() {
    this.productsservice.getAll().subscribe(data => {
      this.allProducts = data
      console.log(this.allProducts, this.p);
      
    })
  }


  getDetail(c: any) {
    this.waitInfo = true;
    this.detailRecup = c;

    console.log("tatan   ,   ",this.detailRecup);
    console.log(this.detailRecup.description);

  }


  // ***** méthode de recherche par  Mot Clé ******************
  getByMotCle() {
    this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
      this.allProducts = result;
    })
  }


  // ***** méthode de recherche par Catégorie ******************
  getByCategoVehicule(C: any) {
    this.productsservice.getbyCategoVehicule(C).subscribe(result => {
      this.allProducts = result;
    })
  }

  
  // ***** méthode de tri par PRIX ***********************************
  getByPrix(f: any) {
    // console.log(f.min, f.max);
    this.productsservice.getByPrix(f.min, f.max).subscribe(result => {
      this.allProducts = result;
      // console.log(result);
    })
  }


  // ***** méthode Pagination ****************
  // pageChange(p: any) {
  //   let limite = 6;
  //   this.productsservice.getPagination(p, limite).subscribe(result => {
  //     this.allProducts = result;
  //   console.log(p, this.allProducts);
  //   })
  // }



  // getCars(){
  //   this.productsservice.getbyCategoVehicule(this.carsCategory).subscribe(data =>{
  //     this.cars = data
  //     console.log(this.cars);

  //   })
  // }



}
