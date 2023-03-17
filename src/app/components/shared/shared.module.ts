import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategsComponent } from '../all-categs/all-categs.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';
import { CategPostsComponent } from '../categ-posts/categ-posts.component';
import { CategoriesComponent } from '../categories/categories.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { JoinUsComponent } from '../join-us/join-us.component';
import { MyPostsComponent } from '../my-posts/my-posts.component';
import { PostsSmallComponent } from '../posts-small/posts-small.component';
import { ReadNextComponent } from '../read-next/read-next.component';
import { RouterModule } from '@angular/router';
import { AutorsComponent } from '../autors/autors.component';
import { FuturedComponent } from '../futured/futured.component';
import { MainPostComponent } from '../main-post/main-post.component';
import { MorePostComponent } from '../more-post/more-post.component';



@NgModule({
  declarations: [
    AllCategsComponent,
    AllPostsComponent,
    AutorsComponent,
    CategPostsComponent,
    CategoriesComponent,
    FooterComponent,
    HeaderComponent,
    JoinUsComponent,
    MyPostsComponent,
    PostsSmallComponent,
    ReadNextComponent,
    FuturedComponent,
    MainPostComponent,
    MorePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AllCategsComponent,
    AllPostsComponent,
    AutorsComponent,
    CategPostsComponent,
    CategoriesComponent,
    FooterComponent,
    HeaderComponent,
    JoinUsComponent,
    MyPostsComponent,
    PostsSmallComponent,
    ReadNextComponent,
    FuturedComponent,
    MainPostComponent,
    MorePostComponent
  ]
  
})
export class SharedModule { }
