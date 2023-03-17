import { Component, Input } from '@angular/core';
import { AllPosts } from 'src/app/models/all_posts';

@Component({
  selector: 'app-futured',
  templateUrl: './futured.component.html',
  styleUrls: ['./futured.component.css']
})
export class FuturedComponent {
@Input () element : AllPosts[] = []
}
