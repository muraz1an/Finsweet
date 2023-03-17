import { Component, OnInit } from '@angular/core';
import { Readnext } from 'src/app/models/nexRead';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  readblockList: Readnext[] = [];

  constructor(private request: RequestService){};

  ngOnInit(): void {
    this.setblockList()
  }
  setblockList(){
    this.request.getData<Readnext[]>(environment.readBlock.get).subscribe((item) => {
      this.readblockList = item
    })
  }

}
