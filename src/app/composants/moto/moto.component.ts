import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  Motos: any;
  detailRecup: any
  waitInfo: boolean = false
  motoCategory = "moto";

  MotCle = ""

  constructor(private productsservice: ProductsService, private usersservice: UsersService) { }

  ngOnInit(): void {
    this.getMotos();
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
      // console.log(result);
    })
  }

  // ***** méthode de recherche par  Mot Clé ******************
  getByMotCle() {
    this.productsservice.getByKeyWord(this.MotCle).subscribe(result => {
      this.Motos = result;
    })
  }

}
