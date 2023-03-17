import { Component, OnInit } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';
import { Socials } from 'src/app/models/autors';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit{
  socials : Socials[] = []
  post: AllPosts[] = []
  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.setSocials()
    this.setMyPost()
  }
  setSocials(){
    this.request.getData<Socials[]>(environment.categs.get).subscribe((item) => {
      this.socials = item
     })
    }
  setMyPost(){
      this.request.getData<AllPosts[]>(environment.myPost.get).subscribe((item) => {
        this.post = item
       })
      }
}
