import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: any;

  constructor(private commandeService : CommandesService) { }

  ngOnInit(): void {
    this.allCommandes()
  }

  allCommandes(){
    this.commandeService.getAllComm().subscribe(data => {
      this.commandes = data;
      console.log("this.commandes ",this.commandes);
        
    })
  }

  changeStatus(c:any){
    console.log(c._id);
    console.log("avant modif r.confirme ", c.confirme);
    c.confirme = !c.confirme
    //test         //let r.confirme = false
    
    // this.commandeService.confirmation(c.id, c.confirme).subscribe((data)=> {
    // this.commandeService.confirmation(c._id).subscribe((data)=> {
    //   this.allCommandes()
    // })

    console.log("après r.confirme ", c.confirme);
    console.log(c._id);

  }

  cUpdate(c:any){
    console.log(c._id);
    console.log("avant modif c.confirme ", c.confirme);
    c.confirme = !c.confirme

    this.commandeService.updateC(c).subscribe(() => {
      // this.detailRecup = data
      console.log("update effectué ??");
      
    })  
    // console.log("après r.confirme ", c.confirme);
  
  }





  updateCC(cL:any){

    cL.confirme = !cL.confirme
    
    this.commandeService.updateCC(cL._id, cL.confirme).subscribe((data)=> {
    console.log("success");
    
    })


  }

}
