import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DirectivaDirective } from './directiva.directive';
import { SecundContentComponent } from './secund-content/secund-content.component';


import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidemenuComponent,
    DirectivaDirective,
    SecundContentComponent,
    HomeComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
