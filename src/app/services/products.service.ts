import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

// méthode GET TOUS les Produits
getAll(){
  return this.http.get("http://localhost:7878");
}

// méthode GET Voitures
getVoitures(){
  return this.http.get("http://localhost:7878/voitures");
}

// méthode GET Motos
getMotos(){
  return this.http.get("http://localhost:7878/motos");
}

// méthode GET Trottinettes
getTrottinettes(){
  return this.http.get("http://localhost:7878/trottinettes");
}


updateVoiture(voiture :  any){
  return this.http.patch("http://localhost:7878/"+voiture._id, voiture)
}
}
