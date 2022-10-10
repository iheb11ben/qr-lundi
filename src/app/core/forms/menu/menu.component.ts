import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from './menu-model';
import { SmenuService } from './smenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  Qr:MenuModel={nomQr:'',name:'',plat:[{value:''}],prix:[{value:0}],user:''}
  constructor(private menuser:SmenuService,private router:Router) { }
  prixs:{value:number}[]=[]
  prix!:number
  plats:{value:string}[]=[]
  plat!:string
  // pri!:number;
  ngOnInit(): void {
    this.Qr.user=localStorage.getItem('idUser')+''
    // console.log('iduser',this.Qr.user);
  }

  submit(){
    this.menuser.create(this.Qr).subscribe(data=>{
     
      localStorage.setItem('id',data._id)
      localStorage.setItem('idqr',data._id)
      console.log(data);
      console.log(data.name);
      
      this.router.navigate(['/core/menu/affiche/'+data._id])
    });
    
}



addphone(ligne:any){
  console.log(ligne);
  
if(ligne === "prix"){
  this.Qr.prix.push({value:0})
  
}
  else if (ligne === "plat"){
    
    this.Qr.plat.push({value:''})
    
    
  }
 
}
remove(i:number,name:string){
  if(name === 'plat'){
  this.Qr.plat.splice(i,1);
  }
  else if(name === 'prix'){
    this.Qr.prix.splice(i,1);
  }
 
}

}
