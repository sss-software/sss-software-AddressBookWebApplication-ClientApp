import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPostsComponent } from './contact-posts/contact-posts.component';
import { ContactPostComponent } from './contact-post/contact-post.component';
import { ContactPostAddEditComponent } from './contact-post-add-edit/contact-post-add-edit.component';

const routes: Routes = [
  {path:'', component: ContactPostsComponent, pathMatch: 'full'},
  {path:'contact/:id', component: ContactPostComponent},
  {path:'add', component: ContactPostAddEditComponent},
  {path:'contact/edit/:id', component: ContactPostAddEditComponent},
  {path:'**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
