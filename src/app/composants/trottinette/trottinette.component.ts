import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-trottinette',
  templateUrl: './trottinette.component.html',
  styleUrls: ['./trottinette.component.css']
})
export class TrottinetteComponent implements OnInit {

  MotCle = ""

  trottinette: any;
  detailRecup : any
  waitInfo : boolean = false
  trottinetteCategory ="trottinette";

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

  constructor(private productsservice: ProductsService,  private commandeService : CommandesService) { }

  ngOnInit(): void {
    this.getTrottine();
  }

  formatPrice(num: any){
    // regExp = 
     const espaceAvecNombre = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    return espaceAvecNombre;
    }


  getTrottine(){
    this.productsservice.getbyCategoVehicule(this.trottinetteCategory).subscribe(data =>{
      this.trottinette = data
      console.log(this.trottinette);
      
    })
  }

    // test get cat + prix
    getCatByPrix(f: any,) {
      console.log(f.min, f.max, );
      // console.log(moto.categorie);
        
      this.productsservice.getCategoryByPrix(f.min, f.max, this.trottinetteCategory).subscribe(result => {
        this.trottinette = result;
        console.log( this.trottinette);
        
        
      })
    }

  getDetail( t : any){
    this.waitInfo = true;
    this.detailRecup = t;
    
    console.log(this.detailRecup);
    console.log(this.detailRecup.description);

  }
    // ***** m??thode de recherche par  Mot Cl?? ******************
    getByMotCle() {
      this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
        this.trottinette = result;
      })
    }

  takeCommand(){ //transf??re donn??e dans l'objet vide qui va ??tre r??utilis?? pour afficher les infos dan sles modal suivantes
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


     // post commande
 let data = this.commandRecap
 this.commandeService.saveCommande(data).subscribe(data=>{
   console.log("post ok");
 })
 // fin post commande
  }




}
