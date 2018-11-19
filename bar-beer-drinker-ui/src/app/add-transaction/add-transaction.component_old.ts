import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionsService, Transaction } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, Drinker } from '../drinkers.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  barName: string;
  add: boolean;
  daysOfWeek: string[];
  categories: string[] = [];
  items: string[];
  drinkers: Drinker[];
  toAdd: Transaction;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    route.paramMap.subscribe(paramMap => this.barName = paramMap.get('bar'));
    this.daysOfWeek = TransactionsService.daysOfWeek;
    this.getCategories().subscribe(categories => {
      categories.forEach(element => {
        this.categories.push(element['category']);
      });
      this.updateItems(0);
    });

    (new DrinkersService(http)).getDrinkers().subscribe(drinkers => {
      this.drinkers = drinkers;
    });

    this.toAdd = {} as any;
    route.paramMap.subscribe((paramMap) => {
      this.toAdd.seller = paramMap.get('bar');
    });
  }

  ngOnInit() {
  }

  onAdd() { this.add = true; }

  getCategories() {
    return this.http.get<string[]>('/api/categories');
  }

  getItems(category: string) {
    return this.http.get<string[]>('/api/items/' + category);
  }

  updateItems(val: any) {
    this.getItems(this.categories[val]).subscribe(items => {
      this.items = [];
      items.forEach(element => {
        this.items.push(element['name']);
      });
    });
  }
}
