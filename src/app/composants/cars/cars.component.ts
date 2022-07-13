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
  detailRecup: any
  waitInfo: boolean = false
  carsCategory = "voiture";
  allMarque = ["citroen", "dacia", "mini", "porsche", "renault", "tesla"]

  // objet pour formulaire client + validation
  commandRecap: any = {
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

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.productsservice.getbyCategoVehicule(this.carsCategory).subscribe(data => {
      this.Cars = data
      console.log(this.Cars);

    })
  }


  getDetail(c: any) {
    this.waitInfo = true;
    this.detailRecup = c;
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

  }

  // // ***** méthode de recherche par  Mot Clé ******************
  // getByMotCle() {
  //   this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
  //     this.Cars = result;
  //   })
  // }


  // // ***** méthode de recherche par Catégorie ******************
  // getByCategoVehicule(C: any) {
  //   this.productsservice.getbyCategoVehicule(C).subscribe(result => {
  //     this.Cars = result;
  //   })
  // }




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

    console.log("commandRecap", this.commandRecap);
    console.log("detailRecup", this.detailRecup);

  }

}
