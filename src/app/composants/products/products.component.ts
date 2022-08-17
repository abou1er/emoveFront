import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { isEmpty } from 'rxjs';
import { CommandesService } from 'src/app/services/commandes.service';
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


  statutConfirme: boolean = false;

  cars: any;
  allProducts: any;
  detailRecup: any;
  waitInfo: boolean = false;
  allCategory = ["voiture", "moto", "trottinette"];
  carsCategory = "voiture";
  motoCategory = "moto";
  trottinetteCategory = "trottinette";


  // skeleton-loader
  loader = true;
  totalCount = 9;  //produits par page dans pagination



  // objet pour formulaire client + validation
  commandRecap: any = {
    _id: '',
    sex: "",
    nom: "",
    prenom: "",
    age: "",
    adresseMail: "",
    adresse: "",
    ville: "",
    codePostal: "",
    image: "",
    image2: "",
    image3: "",
    categorie: "",
    marque: "",
    modele: "",
    annee: "",
    autonomie: "",
    permis: "",
    kilometrage: "",
    puissance: Number,
    description: "",
    equivalent: "",
    prix: Number
  }

  MotCle = ""

  msgError = "";
  commandSuccess = "";
  p: number = 0;

  constructor(private productsservice: ProductsService, private commandeService: CommandesService) { }

  ngOnInit(): void {

    this.getallProducts()

    this.loader = false;

  }


  // post commandes
  saveC(f: any) {
    console.log(f.value);
    let data = f.value
    this.commandeService.saveCommande(data).subscribe(data => {
      console.log("post ok");

    })

  }
  // fin post commande

  // ***** méthode Pagination ****************
  pageChange($event: any) {
    this.p = $event
    document.documentElement.scrollTop = 0

    // 
  }


  getallProducts() {
    this.productsservice.getAll().subscribe(data => {
      this.allProducts = data

      console.log("this.allProducts.length", this.allProducts.length);
    })
  }


  formatPrice(num: any) {
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

  takeCommand() { //transfère donnée dans l'objet vide qui va être réutilisé pour afficher les infos dan sles modal suivantes
    this.commandRecap.image = this.detailRecup.image;
    this.commandRecap.categorie = this.detailRecup.categorie;
    this.commandRecap.marque = this.detailRecup.marque;
    this.commandRecap.modele = this.detailRecup.modele;
    this.commandRecap.annee = this.detailRecup.annee;
    this.commandRecap.autonomie = this.detailRecup.autonomie;
    this.commandRecap.permis = this.detailRecup.permis;
    this.commandRecap.kilometrage = this.detailRecup.kilometrage;
    this.commandRecap.puissance = this.detailRecup.puissance;
    this.commandRecap.description = this.detailRecup.description;
    this.commandRecap.equivalent = this.detailRecup.equivalent;
    this.commandRecap.prix = this.detailRecup.prix;
    this.commandRecap.confirme = this.statutConfirme;
    // this.commandRecap._id = this.detailRecup._id;

    console.log(this.commandRecap);
  }
  validCommand(f: any) {
    this.commandRecap = f   //recup info formulaire
    this.commandRecap.image = this.detailRecup.image;
    this.commandRecap.categorie = this.detailRecup.categorie;
    this.commandRecap.marque = this.detailRecup.marque;
    this.commandRecap.modele = this.detailRecup.modele;
    this.commandRecap.annee = this.detailRecup.annee;
    this.commandRecap.autonomie = this.detailRecup.autonomie;
    this.commandRecap.permis = this.detailRecup.permis;
    this.commandRecap.kilometrage = this.detailRecup.kilometrage;
    this.commandRecap.puissance = this.detailRecup.puissance;
    this.commandRecap.description = this.detailRecup.description;
    this.commandRecap.equivalent = this.detailRecup.equivalent;
    this.commandRecap.prix = this.detailRecup.prix;
    this.commandRecap.confirme = this.statutConfirme;
    // this.commandRecap._id = this.detailRecup._id;   
    console.log(this.commandRecap.nom.length, "length");

    // console.log("commandRecap", this.commandRecap);
    // console.log("detailRecup" , this.detailRecup);
    let typePostal;
    typePostal = typeof (this.commandRecap.codePostal)


    if (          //
      this.commandRecap.sex <= 1
      || this.commandRecap.nom.length <= 2
      || this.commandRecap.prenom.length <= 1
      || this.commandRecap.adresseMail.length <= 6
      || this.commandRecap.age.length <= 9
      || this.commandRecap.adresse.length <= 4
      || this.commandRecap.ville.length <= 4
      || typePostal != 'number'

    ){
      console.log("IF UN CHAMPS NA PAS ETAIT RESPECTE");
      // this.msgError = "le champs nom est vide";
      this.msgError = "UN CHAMPS NA PAS ETAIT RESPECTE"
      // console.log(typeof(this.commandRecap.codePostal  == Number) );
    } else {
      let commandSuccess
      console.log("on est dans le trankil");
      // post commande
      let data = this.commandRecap
      this.commandeService.saveCommande(data).subscribe(data => {
        console.log("post ok");
      })
      // fin post commande

    }


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
