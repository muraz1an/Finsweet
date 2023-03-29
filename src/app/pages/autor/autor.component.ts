import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPosts } from 'src/app/models/all_posts';
import { Autor, Socials } from 'src/app/models/autors';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit{
  socials : Socials[] = []
  autor: Autor[] = []
  post: AllPosts[] = []
  autorPost: string = this.activeRoute.snapshot.params['autor'];
  constructor(
      private request: RequestService,
      public activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setSocials()
    this.setMyPost()
    this.setAutor()
  }
  setAutor(){
    this.request.getData<Autor[]>(`${environment.allAutors.get}?name=${this.autorPost}`).subscribe((item:Autor[]) =>{
      this.autor = item
    })
  }

  setSocials(){
    this.request.getData<Socials[]>(`${environment.Socials.get}?_limit=4`).subscribe((item) => {
      this.socials = item
     })
    }
  setMyPost(){
      this.request.getData<AllPosts[]>(`${environment.postsall.get}?autor=${this.autorPost}`).subscribe((item) => {
        this.post = item
       })
      }
}
