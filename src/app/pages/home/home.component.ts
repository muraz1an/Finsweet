import { Component, OnInit } from '@angular/core';
import { SmallPost } from 'src/app/models/small_post';
import { Categories } from 'src/app/models/categories';
import {RequestService} from '../../service/request.service';
import { Autor, Socials } from 'src/app/models/autors';
import { environment } from 'src/environments/environments';
import { AllPosts } from 'src/app/models/all_posts';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit{
    categories: Categories[] =[];
    autorlist: Autor[] = [];
    socials : Socials[] = [];
    allPost: AllPosts[] = [];
    posts: AllPosts[] = [];

constructor(private request: RequestService) {}

  ngOnInit(){
    this.setCategories();
    this.setAutors();
    this.setSocials();
    this.setFpost();
    this.setPosts();
   };
  setCategories(){
    this.request.getData<Categories[]>(environment.categs.get).subscribe((item) => {
      this.categories = item
    })
  }
  setAutors(){
    this.request.getData<Autor[]>(environment.allAutors.get + "/?_limit=4").subscribe((item) => {
      this.autorlist = item
    })
  }
 setSocials(){
  this.request.getData<Socials[]>(environment.Socials.get + "?_limit=4").subscribe((item) => {
    this.socials = item
   })
  }
  setFpost(){
    this.request.getData<AllPosts[]>(environment.postsall.get + "?_start=5&_end=6").subscribe((item) => {
      this.allPost = item;
    })
  }
  setPosts(){
    this.request.getData<AllPosts[]>(environment.postsall.get + '?_limit=4').subscribe((item) => {
      this.posts = item;
    })
  }
}