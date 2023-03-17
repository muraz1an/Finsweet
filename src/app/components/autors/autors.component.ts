import { Component, Input } from '@angular/core';
import { Autor, Socials } from 'src/app/models/autors';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent {
  @Input() autorsList: Autor[] = [];
  @Input() scoialList: Socials[] = [];
}
export { Autor };
export { Socials };
