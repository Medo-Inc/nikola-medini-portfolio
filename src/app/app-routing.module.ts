import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ApartmentsAneComponent } from './pages/apartments-ane/apartments-ane.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { ColnaComponent } from './pages/colna/colna.component';
import { DinersComponent } from './pages/diners/diners.component';
import { ErsteComponent } from './pages/erste/erste.component';
import { FunkyMotionComponent } from './pages/funky-motion/funky-motion.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LavanderaComponent } from './pages/lavandera/lavandera.component';
import { PodravkaComponent } from './pages/podravka/podravka.component';
import { VegetaComponent } from './pages/vegeta/vegeta.component';
import { VirtualFactoryComponent } from './pages/virtual-factory/virtual-factory.component';

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
  {
    path: 'virtual-factory',
    component: VirtualFactoryComponent,
  },
  {
    path: 'funky-motion',
    component: FunkyMotionComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
