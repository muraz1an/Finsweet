import { Component, Input } from '@angular/core';
import { Readnext } from 'src/app/models/nexRead';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.css']
})
export class ReadNextComponent {
@Input()  readblockList: Readnext[] = []
}
