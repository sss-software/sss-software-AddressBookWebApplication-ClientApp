import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPostsComponent } from './contact-posts/contact-posts.component';
import { ContactPostComponent } from './contact-post/contact-post.component';
import { ContactPostAddEditComponent } from './contact-post-add-edit/contact-post-add-edit.component';
import { ContactPostService } from './services/contact-post.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactPostsComponent,
    ContactPostComponent,
    ContactPostAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ContactPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
