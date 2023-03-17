import { Component, Input } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';

@Component({
  selector: 'app-categ-posts',
  templateUrl: './categ-posts.component.html',
  styleUrls: ['./categ-posts.component.css']
})
export class CategPostsComponent {
 @Input() categs : AllPosts[] = [];
}
