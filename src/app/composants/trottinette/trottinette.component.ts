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

      msgError = true;
      statutConfirme: boolean = false;

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
    // ***** méthode de recherche par  Mot Clé ******************
    getByMotCle() {
      this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
        this.trottinette = result;
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
      this.msgError = false
      // console.log(typeof(this.commandRecap.codePostal  == Number) );
    } else {
      let commandSuccess
      console.log("on est dans le trankil");
      // post commande
      this.msgError = true
      let data = this.commandRecap
      this.commandeService.saveCommande(data).subscribe(data => {
        console.log("post ok");
      })
      // fin post commande

    }


  }

}
