import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../service/request.service';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { environment } from 'src/environments/environments';

interface Tokken {
  token?:string
  error?:string
}
interface Login {
  email:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  category: Categories[] = []
  tokken: Tokken = {}
  form:FormGroup = new FormGroup({})
  constructor( public fb: FormBuilder,
               private request: RequestService,
               private router: Router
    ){}

  ngOnInit(): void {
    this.setCateg();
    this.isLogined()
    this.form = this.fb.group({
      email: ['', [Validators.required ,Validators.pattern(/^[0-9a-zA-Z\-_\.]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required , Validators.minLength(5)]]
    })
  }
  isLogined(){
    if(this.request.isLogined()){
      this.router.navigate(['admin'])
    }
  }
  logIn(){
    let obj:Login =  {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.request.postData<Login>('https://reqres.in/api/login',obj).subscribe((item:Tokken)=>{
      if('token' in item && item.token != undefined){
        console.log(item.token);
        this.request.setToken(item.token)
        this.isLogined()
      }
    })

  }

  setCateg(){
    this.request.getData<Categories[]>(environment.categs.get + '?_start=3&_end=4').subscribe((item)=> {
      this.category = item
    })
  }
}
