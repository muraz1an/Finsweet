import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AutorsComponent } from './adminComponents/autors/autors.component';
import {MatTableModule} from '@angular/material/table';
import { CategoriesAdmComponent } from './adminComponents/categories-adm/categories-adm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllPostsComponent } from './adminComponents/all-posts/all-posts.component';
import { MyPostsComponent } from './adminComponents/my-posts/my-posts.component';


@NgModule({
  declarations: [
    AdminComponent,
    AutorsComponent,
    CategoriesAdmComponent,
    AllPostsComponent,
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
