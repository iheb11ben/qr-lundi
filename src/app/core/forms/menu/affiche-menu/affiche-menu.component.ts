import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { MenuModel } from '../menu-model';
import { SmenuService } from '../smenu.service';

@Component({
  selector: 'app-affiche-menu',
  templateUrl: './affiche-menu.component.html',
  styleUrls: ['./affiche-menu.component.scss']
})
export class AfficheMenuComponent implements OnInit {

  qrcode :MenuModel={nomQr:'',name:'',plat:[''],prix:[''],user:''};
 
id:string=''
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'http://192.168.100.11:4200/core/menu/affiche';

    constructor(private menuServ:SmenuService, private activeRoute:ActivatedRoute,private route:Router) { }
  
    ngOnInit(): void {
    
      // this.id = localStorage.getItem('id')+''
      this.id=localStorage.getItem('idqr')+''
      this.affiche(this.id);
      // this.affQr()

  
    }
    affiche(id:string){
      this.route.navigate(['/core/menu/affiche/'+id])
      
   console.log('bilel',id);
   
        this.menuServ.getbyId(id+'').subscribe(data=>{this.qrcode=data,console.log("data bilel",this.qrcode);
  
    });
    this.value = 'http://192.168.100.11:4200/core/menu/affiche/'+id;
    }
    
    
  
}
