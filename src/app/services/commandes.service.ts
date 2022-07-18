import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  URL = "https://scenic-congaree-98068.herokuapp.com/"
  
  constructor(private http : HttpClient) { }
    // méthode GET TOUTES les commandes 
    getAllComm() {
      return this.http.get(`${this.URL}commandes`);
      
    }

    saveCommande(commande:any){
      return this.http.post(`${this.URL}commandes/`,commande);
    }



    confirmation(_id:any, confirme:any){
      return this.http.patch(`${this.URL}`, _id + {confirme:!confirme})
    }
}
