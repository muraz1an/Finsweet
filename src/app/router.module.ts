import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "blog",
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'blog-post/:id',
    loadChildren: () => import('./pages/blog-post/blog-post.module').then(m => m.BlogPostModule)
  },
  {
    path: "about-us",
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: "categories",
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path:'autor/:autor',
    loadChildren: () => import('./pages/autor/autor.module').then(m => m.AutorModule)
  },
  {
    path: 'contact_us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'privacy_policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }