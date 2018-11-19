import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsComponent } from './bars/bars.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ModificationsComponent } from './modifications/modifications.component';
import { QueryComponent } from './query/query.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: BarsComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'bar/:bar/add',
    pathMatch: 'full',
    component: AddTransactionComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkersComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'drinker/:drinker/transactions',
    pathMatch: 'full',
    component: TransactionsComponent
  },
  {
    path: 'modifications',
    pathMatch: 'full',
    component: ModificationsComponent
  },
  {
    path: 'query',
    pathMatch: 'full',
    component: QueryComponent
  },
  {
    path: 'verify',
    pathMatch: 'full',
    component: VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
