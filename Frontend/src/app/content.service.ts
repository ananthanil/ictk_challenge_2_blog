import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  server_addres : string = 'api'
  constructor( private http:HttpClient) { }
  getblogs(){
    return this.http.get<any>(`${this.server_addres}/Blogs`);
  }
}
