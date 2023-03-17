import { Component, Input } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent {
 @Input() element: AllPosts[] =[];
}
