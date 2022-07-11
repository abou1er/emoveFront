import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = "https://scenic-congaree-98068.herokuapp.com"
  constructor(private http: HttpClient) { }

  // méthode GET TOUS les Produits 
  getAll() {
    return this.http.get(`${this.URL}`);
    
  }

  // getPagination(p:any, limite:any){
  //   return this.http.get(`${this.URL}?_page=${p}&_limit=${limite}`);
  // }



  // méthode GET Voitures
  getVoitures() {
    return this.http.get(`${this.URL}/voitures`);
  }

  // méthode GET Motos
  getMotos() {
    return this.http.get(`${this.URL}/motos`);
  }

  // méthode GET Trottinettes
  getTrottinettes() {
    return this.http.get(`${this.URL}/trottinettes`);
  }


  getbyCategoVehicule(catego: any) {
    return this.http.get(`${this.URL}/byCat/cat/cat?categorie=${catego}`);
  }

  getbyPermis(permis: any) {
    return this.http.get(`${this.URL}/byCat/cat/cat?permis=${permis}`);
  }

  updateV(v: any) {
    return this.http.patch(`${this.URL}/v._id`, v)
  }

  getByPrix(min: any, max: any) {
    return this.http.get(`${this.URL}/byPrice?min=${min}&max=${max}`);
  }

  getMotosByPrix(min: any, max: any) {
    return this.http.get(`${this.URL}/byCat/moto/by/price?min=${min}&max=${max}&categorie=moto`);
  }

  // getMotosByPrix(min:any, max:any, catego:any){
  //   return this.http.get(`${this.URL}/byCat/moto/by/price?min=${min}&max=${max}&categorie=${catego}`);
  // }


  getByKeyWord(k: any) {
    return this.http.get(`${this.URL}/byKeyWord/kw?Key=${k}`)
  }






}
