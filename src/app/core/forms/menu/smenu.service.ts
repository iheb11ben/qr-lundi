import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuModel } from './menu-model';

@Injectable({
  providedIn: 'root'
})
export class SmenuService {
baseUrl=environment.baseUrl
  constructor(private httpclient:HttpClient) { }

  create(data:MenuModel):Observable<any>{
return this.httpclient.post<any>(this.baseUrl+'menu',data)
  }
  getbyId(id:String):Observable<any>{
return this.httpclient.get<any>(this.baseUrl+'menu/'+id)
  }
  getbyIduser(id:String):Observable<any>{
return this.httpclient.get<any>(this.baseUrl+'menu/menu/'+id)
  }


}
