import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  
  getData<Type> (url: string) {
    return this.http.get<Type>(url);
  }
  getAdminDatas<Type> (url: string) {
    return this.http.get<Type>(url, {observe: 'response'});
  }
  postData<Type> (url: string, value: Type) {
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(url, value, {headers: headers});
  }
  putData<Type> (url: string, value: Type) {
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put(url, value);
  }
  deleteData(url: string) {
    return this.http.delete(url);
  }
  setToken(tokken:string){
    localStorage.setItem('token',tokken)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logOut(){
    return localStorage.removeItem('token')
  }

  isLogined(){
    if(this.getToken() != null && this.getToken != undefined){
      return true
    } else {
      return false
    }
  }
}
