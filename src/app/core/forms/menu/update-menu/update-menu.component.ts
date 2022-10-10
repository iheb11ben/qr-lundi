import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuModel } from '../menu-model';
import { SmenuService } from '../smenu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent implements OnInit {
  id:string=''
  qrcode: MenuModel = {
    nomQr: '',
    name: '',
    plat: [{ nomPlat: '', prixPlat: 0 }],
    user: '',
  };
  constructor(private menuServ:SmenuService, private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
  }
 update(id:string){
    this.route.navigate(['/core/menu/affiche/'+id])
    

 
      this.menuServ. updateMenu(id+'',data).subscribe(data=>{this.qrcode=data,console.log("data bilel",data);
      console.log('bilel',data);
  });
 
  
  }
}
