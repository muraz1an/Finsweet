import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
bool:boolean = false
openMenu(btn:HTMLElement,menu: HTMLElement ){
  this.bool = ! this.bool
  if(this.bool){
    btn.style.transform = 'rotate(90deg)'
    menu.style.opacity = '1'
    menu.style.zIndex = '56'
  }else {
    btn.style.transform = 'none'
    menu.style.opacity = '0'
    menu.style.zIndex = '-10'
  }
  
}
}
