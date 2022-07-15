import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

//http://localhost:7878/byCat?categorie=trottinette&pricemin=300&pricemax=50000


  Motos: any;
  detailRecup: any
  waitInfo: boolean = false
  motoCategory = "moto";

  MotCle = ""

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

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getMotos();
  }

  formatPrice(num: any){
    // regExp = 
     const espaceAvecNombre = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    return espaceAvecNombre;
    }


  getMotos() {
    this.productsservice.getbyCategoVehicule(this.motoCategory).subscribe(data => {
      this.Motos = data
      console.log(this.Motos);
    })
  }

  getDetail(c: any) {
    this.waitInfo = true;
    this.detailRecup = c;

    console.log(this.detailRecup);
    console.log(this.detailRecup.description);
  }

  // ***** méthode de tri par PRIX***********************************
  getByPrix(f: any) {
    // console.log(f.min, f.max);
    this.productsservice.getByPrix(f.min, f.max).subscribe(result => {
      this.Motos = result;
      //console.log(result);
    })
  }

   // ***** méthode de tri par PRIX des motos***********************************
   getMotosByPrix(f: any, moto : any) {
    console.log(f.min, f.max, );
    // console.log(moto.categorie);
      
    this.productsservice.getMotosByPrix(f.min, f.max).subscribe(result => {
      this.Motos = result;
      console.log( this.Motos);
      
      
    })
  }


  // ***** méthode de recherche par  Mot Clé ******************
  getByMotCle() {
    this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
      this.Motos = result;
    })
  }



  
  takeCommand(){ //transfère donnée dans l'objet vide qui va être réutilisé pour afficher les infos dans les modal suivantes
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

}
