import { Component, OnInit } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';
import { PostServiceService } from 'src/app/service/postServise/post-service.service';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-more-post',
  templateUrl: './more-post.component.html',
  styleUrls: ['./more-post.component.css']
})
export class MorePostComponent implements OnInit{
  post: AllPosts[] = []
  id:number= this.itemid.id;
  constructor( public request:RequestService,
              public itemid: PostServiceService
    ){}
  ngOnInit(): void {
    this.setPost()
  }
  setPost(){
    this.request.getData<AllPosts>(`${environment.postsall.get}/${this.id}`).subscribe((item)=>{
      
      if(item != null && item != undefined){
        this.post.push(item) 
      }

      
    })
  }
}
