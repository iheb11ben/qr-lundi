import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from '../url';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-update-url',
  templateUrl: './update-url.component.html',
  styleUrls: ['./update-url.component.scss']
})
export class UpdateUrlComponent implements OnInit {

  constructor(private urlService:UrlService,private activeRoute:ActivatedRoute) { }
url:Url={url:'',user:''}
  ngOnInit(): void {
    let id =this.activeRoute.snapshot.params['id']
    this.urlService.getQrCode(id).subscribe(data=>{this.url=data;console.log(data);})
  }
  update(){
    // console.log(localStorage.getItem('idqr'));
    this.url.user=localStorage.getItem('idUser')+'';
    this.urlService.updateQrCodebyIduser(localStorage.getItem('idUrl'),this.url).subscribe(data=>this.url=data[0])
  }
}
