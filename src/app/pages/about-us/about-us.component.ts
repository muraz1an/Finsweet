import { Component, OnInit } from '@angular/core';
import { Autor, Socials } from 'src/app/models/autors';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent  implements OnInit{
  socials : Socials[] = [];
  autorlist : Autor[] = [];

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.setSocials();
    this.setAutors();
  }

  setSocials(){
      this.request.getData<Socials[]>(environment.Socials.get + "?_limit=4").subscribe((item) => {
        this.socials = item
       })
  }
  setAutors(){
      this.request.getData<Autor[]>(environment.allAutors.get).subscribe((item) => {
        this.autorlist = item
       })
  }
}
