import { Component, OnInit } from "@angular/core";
import { AllPosts } from "src/app/models/all_posts";
import { Categories } from "src/app/models/categories";
import { RequestService } from "src/app/service/request.service";
import { environment } from "src/environments/environments";


@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  categories: Categories[] = [];
  allPosts: AllPosts[] = [];
  mpost: AllPosts[] =[];
  i: number = 1;
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.setCategories();
    this.setAllPosts();
    this.setMainPost();
    this.setvalue()
  }

  setCategories() {
    this.request.getData<Categories[]>(environment.categs.get).subscribe((item) => {
      this.categories = item
    })
  }
  totCount: number = 0;
  setvalue() {
     this.request.getData<AllPosts[]>(environment.postsall.get).subscribe((item) =>{
      this.totCount = item.length
    })
  }
  setAllPosts() {
    this.request.getData<AllPosts[]>(environment.postsall.get + `?_page=${this.i}&_limit=5`).subscribe((item) => {
      this.allPosts = item ;
      
    })
  }


  setMainPost(){
    this.request.getData<AllPosts>(environment.postsall.get + "/7").subscribe((item) => {    
      this.mpost.push(item)
           
    })
  }
  nextPage(){
    if(this.i < Math.ceil(this.totCount/5)){  
      ++this.i
      this.setAllPosts()
    }
  }
  
  prewPage(){
    if(this.i > 1){
      --this.i
     this.setAllPosts()
    }
  }
}
