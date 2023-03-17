import { Component, OnInit } from '@angular/core';
import { Socials } from '../autors/autors.component';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
 social: Socials[] = []
 constructor(private request: RequestService){}
  ngOnInit():void{
    this.setSocials()
  }
  setSocials(){
    this.request.getData<Socials[]>(environment.Socials.get + "?_start=4&_end=8").subscribe((item)=>{
      this.social = item
    })
  }
}
