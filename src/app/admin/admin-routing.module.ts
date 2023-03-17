import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AutorsComponent } from '../admin/adminComponents/autors/autors.component';
import { CategoriesAdmComponent } from './adminComponents/categories-adm/categories-adm.component';
import { AllCategsComponent } from '../components/all-categs/all-categs.component';
import { AllPostsComponent } from './adminComponents/all-posts/all-posts.component';
import { MyPostsComponent } from './adminComponents/my-posts/my-posts.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AutorsComponent
      },
      {
        path: 'autor',
        component: AutorsComponent
      },
      {
        path: 'categs',
        component: CategoriesAdmComponent
      },
      {
        path: 'allposts',
        component: AllPostsComponent
      },
      {
        path: 'myposts',
        component: MyPostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
