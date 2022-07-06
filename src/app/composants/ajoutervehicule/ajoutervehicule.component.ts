import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-ajoutervehicule',
  templateUrl: './ajoutervehicule.component.html',
  styleUrls: ['./ajoutervehicule.component.css']
})
export class AjoutervehiculeComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }

  saveV(produit:any){
    console.log(produit.value);
    let data = produit.value
    this.adminService.saveV(data).subscribe(data=>{
      console.log("post ok");
      
    })
    
  }

}
