import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  id: number = 1;

  idChanger(num:number){
    this.id = num
  }
}
