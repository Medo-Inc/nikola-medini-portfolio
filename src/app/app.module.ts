import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ApartmentsAneComponent } from './components/pages/apartments-ane/apartments-ane.component';
import { CocktailsComponent } from './components/pages/cocktails/cocktails.component';
import { ColnaComponent } from './components/pages/colna/colna.component';
import { DinersComponent } from './components/pages/diners/diners.component';
import { ErsteComponent } from './components/pages/erste/erste.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LavanderaComponent } from './components/pages/lavandera/lavandera.component';
import { PodravkaComponent } from './components/pages/podravka/podravka.component';
import { VegetaComponent } from './components/pages/vegeta/vegeta.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ApartmentsAneComponent,
    CocktailsComponent,
    DinersComponent,
    ErsteComponent,
    HomepageComponent,
    LavanderaComponent,
    PodravkaComponent,
    VegetaComponent,
    ColnaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
