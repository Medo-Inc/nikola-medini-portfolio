import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { ApartmentsAneComponent } from './pages/apartments-ane/apartments-ane.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { ColnaComponent } from './pages/colna/colna.component';
import { DinersComponent } from './pages/diners/diners.component';
import { ErsteComponent } from './pages/erste/erste.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LavanderaComponent } from './pages/lavandera/lavandera.component';
import { PodravkaComponent } from './pages/podravka/podravka.component';
import { VegetaComponent } from './pages/vegeta/vegeta.component';
import { TitleCardComponent } from './components/title-card/title-card.component';

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
    TitleCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
