import { Component, Input, OnInit } from '@angular/core';
import {SmallPost} from '../../models/small_post';
import { AllPosts } from 'src/app/models/all_posts';
import { PostServiceService } from 'src/app/service/postServise/post-service.service';


@Component({
  selector: 'app-posts-small',
  templateUrl: './posts-small.component.html',
  styleUrls: ['./posts-small.component.css']
})
export class PostsSmallComponent {
  @Input() elements: AllPosts[] = [];
  constructor(public postId: PostServiceService){}
  changeId(id:number){
    this.postId.idChanger(id)
  }
}
export { SmallPost };

