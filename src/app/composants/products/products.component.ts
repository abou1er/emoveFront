import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

// TEST LEILA 
formattedPrice: any;





  cars: any;
  allProducts: any;
  detailRecup: any;
  waitInfo: boolean = false;
  allCategory = ["voiture", "moto", "trottinette"];
  carsCategory = "voiture";
  motoCategory = "moto";
  trottinetteCategory = "trottinette";


  // objet pour formulaire client + validation
  commandRecap:  any = {
    sex: "",
    nom: "",
    prenom: "",
    age: "",
    adresseMail: "",
    adresse: "",
    ville:"",
    codePostal: "",
    image : "",
    image2 : "",
    image3 : "",
    categorie :"",
    marque : "",
    modele : "",
    annee : "",
    autonomie : "",
    permis :"",
    kilometrage : "",
    puissance : Number,
    description : "", 
    equivalent : "",
    prix : Number
    }

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


    
    
    // 
  }


  getallProducts() {
    this.productsservice.getAll().subscribe(data => {
      this.allProducts = data
    })
  }


  formatPrice(num: any){
  // regExp = 
   const espaceAvecNombre = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
  return espaceAvecNombre;
  }

  // getallProducts(p: any) {
  //     let limit = 2
  //     // p = this.allProducts.currentPage

  //     this.productsservice.getAll(p, limit).subscribe(data => {
  //     this.allProducts = data


  //     console.log("p égal " , p, );
  //     console.log("this.allProducts égal " , this.allProducts.currentPage);
  //     console.log("limit égal " , limit);

  //   })
  // }

  getDetail(c: any) {
    this.waitInfo = true;
    this.detailRecup = c;
    console.log(this.detailRecup);
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

  takeCommand(){ //transfère donnée dans l'objet vide qui va être réutilisé pour afficher les infos dan sles modal suivantes
    this.commandRecap.image =  this.detailRecup.image;
    this.commandRecap.categorie =  this.detailRecup.categorie;
    this.commandRecap.marque =  this.detailRecup.marque;
    this.commandRecap.modele =  this.detailRecup.modele;
    this.commandRecap.annee =  this.detailRecup.annee;
    this.commandRecap.autonomie =  this.detailRecup.autonomie;
    this.commandRecap.permis =  this.detailRecup.permis;
    this.commandRecap.kilometrage =  this.detailRecup.kilometrage;
    this.commandRecap.puissance =  this.detailRecup.puissance;
    this.commandRecap.description =  this.detailRecup.description;
    this.commandRecap.equivalent =  this.detailRecup.equivalent;
    this.commandRecap.prix =  this.detailRecup.prix;

    console.log(this.commandRecap);
  }
  validCommand(f:any){
    this.commandRecap = f   //recup info formulaire
    this.commandRecap.image =  this.detailRecup.image;
    this.commandRecap.categorie =  this.detailRecup.categorie;
    this.commandRecap.marque =  this.detailRecup.marque;
    this.commandRecap.modele =  this.detailRecup.modele;
    this.commandRecap.annee =  this.detailRecup.annee;
    this.commandRecap.autonomie =  this.detailRecup.autonomie;
    this.commandRecap.permis =  this.detailRecup.permis;
    this.commandRecap.kilometrage =  this.detailRecup.kilometrage;
    this.commandRecap.puissance =  this.detailRecup.puissance;
    this.commandRecap.description =  this.detailRecup.description;
    this.commandRecap.equivalent =  this.detailRecup.equivalent;
    this.commandRecap.prix =  this.detailRecup.prix;

    console.log("commandRecap", this.commandRecap);
    console.log("detailRecup" , this.detailRecup);

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
