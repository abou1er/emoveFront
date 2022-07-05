import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = "https://scenic-congaree-98068.herokuapp.com"
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(this.URL);
  }
  

}
