import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { SigninComponent } from './signin/signin.component';
import { CommentComponent } from './comment/comment.component';
import { BloggerComponent } from './blogger/blogger.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogviewComponent,
    SigninComponent,
    CommentComponent,
    BloggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
