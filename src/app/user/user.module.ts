import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReadLatterComponent } from './pages/read-latter/read-latter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
  
    HomeComponent,
       SidebarComponent,
       UserComponent,
       ProfileComponent,
       ReadLatterComponent,
       NavbarComponent,
       ArticleCardComponent,
       NotFoundComponent,
       PaginationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
