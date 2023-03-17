import { Component, Input } from '@angular/core';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() categoria: Categories[] = [];
}

export { Categories };
