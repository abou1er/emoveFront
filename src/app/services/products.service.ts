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


getbyCategoVehicule(catego:any){
  return this.http.get(`http://localhost:7878/byCat?categorie=${catego}`);
}

getbyPermis(permis:any){
  return this.http.get(`http://localhost:7878/byCat?permis=${permis}`);
}

updateV(v:any){
  return this.http.patch("http://localhost:7878/"+v._id, v)
}

getByPrix(min:any, max:any){
  return this.http.get(`http://localhost:7878/byPrice?min=${min}&max=${max}`);
}

getByKeyWord(k:any){
  return this.http.get(`http://localhost:7878/byKeyWord?Key=${k}`)
}



}
