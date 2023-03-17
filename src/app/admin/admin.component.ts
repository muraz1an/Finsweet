import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit{
  constructor(
    private request: RequestService,
    private router: Router
  ){}
 ngOnInit(): void {
   this.isLogined()
 } 
 isLogined(){
    if(!this.request.isLogined()){
      this.router.navigate(['login'])
    }
  }
 LogOut(){
  if(confirm('Do you really want to log out?')){
    this.request.logOut()
    this.isLogined()
  }

 }
}

