import { Component, Input, OnInit } from '@angular/core';
import {SmallPost} from '../../models/small_post';
import { AllPosts } from 'src/app/models/all_posts';


@Component({
  selector: 'app-posts-small',
  templateUrl: './posts-small.component.html',
  styleUrls: ['./posts-small.component.css']
})
export class PostsSmallComponent {
  @Input() elements: AllPosts[] = [];
  
  constructor(){}

}
export { SmallPost };

