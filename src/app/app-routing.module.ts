import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'apartmani-ane',
    component: ApartmentsAneComponent,
  },
  { path: 'cocktail', component: CocktailsComponent },
  {
    path: 'diners',
    component: DinersComponent,
  },
  {
    path: 'erste',
    component: ErsteComponent,
  },
  {
    path: 'lavandera',
    component: LavanderaComponent,
  },
  {
    path: 'podravka',
    component: PodravkaComponent,
  },
  {
    path: 'vegeta',
    component: VegetaComponent,
  },
  {
    path: 'colna',
    component: ColnaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
