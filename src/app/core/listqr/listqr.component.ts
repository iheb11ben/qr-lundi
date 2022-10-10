import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartevisiteService } from '../forms/cartevisite/cartevisite.service';
import { Catremodel } from '../forms/cartevisite/catremodel';
import { MenuModel } from '../forms/menu/menu-model';
import { SmenuService } from '../forms/menu/smenu.service';

@Component({
  selector: 'app-listqr',
  templateUrl: './listqr.component.html',
  styleUrls: ['./listqr.component.scss']
})
export class ListqrComponent implements OnInit {
myVisite!:Catremodel[];
mymenu!:MenuModel[];
url:String[]=[];
  qrcode: any;
  search_name:any 
  constructor(private carteS:CartevisiteService,private route:Router,private sermenu:SmenuService) { }

  ngOnInit(): void {
this.carteS.getQrCodebyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.myVisite=data,console.log('visit',this.myVisite)
  
})

this.sermenu.getbyIduser(localStorage.getItem('idUser')+'').subscribe(data=>{this.mymenu=data,console.log('menuu',this.mymenu)
  
})
  }
  affiche(id :any){
      // let id = this.myVisite._id
      //  console.log('iddddd',id);
      console.log('idddddddddddddd',id);
      
      
      this.carteS.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
      localStorage.setItem('idqr',id)
      this.route.navigate(['/core/carte/affiche/'+id])
  });
 
  }
  affiche2(id :any){
      // let id = this.myVisite._id
      //  console.log('iddddd',id);
      console.log('idddddddddddddd',id);
      
      
      this.sermenu.getbyId(id+'').subscribe(data=>{this.qrcode=data,console.log("data",this.qrcode);
      localStorage.setItem('idqr',id)
      this.route.navigate(['/core/menu/affiche/'+id])
  });
 
  }

}
