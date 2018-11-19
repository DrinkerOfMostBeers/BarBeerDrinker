import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    BarDetailsComponent,
    DrinkersComponent,
    DrinkerDetailsComponent,
    TransactionsComponent,
    BeersComponent,
    BeerDetailsComponent,
    AddTransactionComponent,
    ModificationsComponent,
    QueryComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
