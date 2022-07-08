import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = "https://scenic-congaree-98068.herokuapp.com/"
  
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(this.URL);
  }
  

  saveV(products:any){
    return this.http.post(this.URL,products);
  }


  deleteV(_id:any){
    return this.http.delete(this.URL+_id);
  }

  updateV(v:any){
    return this.http.patch(this.URL+v._id,v)
  }

}
