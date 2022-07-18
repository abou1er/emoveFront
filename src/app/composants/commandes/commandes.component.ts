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
      console.log(this.commandes);
        
    })
  }

  changeStatus(r:any){
    console.log(r._id);
    console.log(r.confirme);
    
    //test         //let r.confirme = false
    this.commandeService.confirmation(r._id, r.confirme).subscribe((data)=> {
      this.allCommandes()
    })

  }

}
