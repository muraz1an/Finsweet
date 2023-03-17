import { Component, Input } from '@angular/core';
import { Categories } from '../categories/categories.component';

@Component({
  selector: 'app-all-categs',
  templateUrl: './all-categs.component.html',
  styleUrls: ['./all-categs.component.css']
})
export class AllCategsComponent {
  @Input() categs: Categories[] = [];
}
