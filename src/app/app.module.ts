import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { AllPostsComponent } from './main/all-posts/all-posts.component';
import { RightSidebarComponent } from './main/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ThoughtsComponent,
    SignupComponent,
    LoginComponent,
    SidebarComponent,
    AllPostsComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
