import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AutorComponent } from './autor.component';


@NgModule({
  declarations: [
    AutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    SharedModule
  ]
})
export class AutorModule { }
