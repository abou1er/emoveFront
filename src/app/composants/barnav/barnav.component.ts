import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent implements OnInit {

  inpConnect: any 
  // inpConnect =  {
  //   username: "",
  //   mdp: "",
  //   }
  conectGood = false

  isAdmin:boolean = false
  conectWrong:boolean = false

  authen : any  = {
    username :"Pedro",
    mdp : "1234"
    }

  constructor() { }

  ngOnInit(): void {
  }

  // CONNEXION
  disconect(){
    this.isAdmin = false;
    this.conectGood = false;
    
  }

  onconect(fConnect:any){
    // this.isAdmin = !this.isAdmin
  this.inpConnect = fConnect;
  console.log(this.inpConnect.username , " le username");  
  console.log(this.inpConnect.mdp , " le mdp");   
  
    if(this.inpConnect.username == this.authen.username  &&  this.inpConnect.mdp == this.authen.mdp){        
      this.isAdmin = !this.isAdmin
      this.conectGood  = true
    }else{        
      this.conectWrong = true       
      setTimeout(() => {this.conectWrong = false}, 5000);
      this.onconect(fConnect)
    }      
  }


}
