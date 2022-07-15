import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ProductsService } from 'src/app/services/products.service';

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


  MotCle = ""

  constructor(private adminService : AdminService, private productsservice: ProductsService) { }

  ngOnInit(): void {
    this.getallProducts()
  }


  formatPrice(num: any){
    // regExp = 
     const espaceAvecNombre = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    return espaceAvecNombre;
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
    // console.log(this.detailRecup.description);

  }

    // ***** méthode de recherche par Catégorie ******************
    getByCategoVehicule(C: any) {
      this.productsservice.getbyCategoVehicule(C).subscribe(result => {
        this.allProducts = result;
      })
    }

    // ***** méthode de recherche par  Mot Clé ******************
  getByMotCle() {
    this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
      this.allProducts = result;
    })
  }
  

  deleteV(_id:any){
    
    console.log("avant vehicule avec id", _id , "delete" );
    this.adminService.deleteV(_id).subscribe(() =>{
      
      console.log("apres vehicule avec id", _id , "delete" );
    })

  }


  vUpdate(){
    this.adminService.updateV(this.detailRecup).subscribe(() => {
      // this.detailRecup = data
      console.log("update effectué ??");
      
    })  }

}
