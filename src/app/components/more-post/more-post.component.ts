import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPosts } from 'src/app/models/all_posts';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-more-post',
  templateUrl: './more-post.component.html',
  styleUrls: ['./more-post.component.css']
})
export class MorePostComponent implements OnInit {
  post: AllPosts[] = []
  id: number = this.activeRoute.snapshot.params['id'];
  constructor(public request: RequestService,
    public activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.setPost()
  }
  setPost() {
    this.request.getData<AllPosts>(`${environment.postsall.get}/${this.id}`).subscribe((item: AllPosts) => {

      if (item != null && item != undefined) {
        this.post.push(item)
      }

    })
  }
}
