import { Component, Input } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  @Input() posts: AllPosts[] = [];
}

