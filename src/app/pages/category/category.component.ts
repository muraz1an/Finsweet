import { Component, OnInit } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';
import { Categories } from 'src/app/models/categories';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categPosts: AllPosts[] = [];
  categs: Categories[] = [];
  constructor(private request: RequestService){}

  ngOnInit(): void {
    this.setCategPost();
    this.setCategories();
  }
  setCategPost(){
    this.request.getData<AllPosts[]>(`${environment.postsall.get}?_limit=4`).subscribe((item) => {
      this.categPosts = item
    })
  }
  setCategories(){
    this.request.getData<Categories[]>(environment.categs.get).subscribe((item) => {
      this.categs = item
    })
  }
}
