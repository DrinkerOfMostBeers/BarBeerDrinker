import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  drinkers: string[];
  categories: string[];
  itemsList: string[][];
  seller: string;
  items: string[][] = [];
  daysOfWeek: string[] = TransactionsService.daysOfWeek;
  finalTotal: number = undefined;

  transactionForm = this.fb.group({
    transactionId: ['', Validators.required],
    payer: ['', Validators.required],
    itemsArray: this.fb.array([this.addItemRow()], Validators.required),
    dayIssued: ['', Validators.required],
    timeIssued: ['', Validators.required],
    tip: [0]
  });

  response: any;

  constructor(public http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder) {
    route.paramMap.subscribe(paramMap => this.seller = paramMap.get('bar'));


    this.getCategories().subscribe(categories => {
      this.categories = [];
      categories.forEach(element => {
        this.categories.push(element['category']);
      });
      this.itemsArray.at(0).get('category').setValue('BEER');
      this.itemsList = [];
      for (let i = 0; i < this.categories.length; i++) {
       this.getItems(this.categories[i]).subscribe(items => {
          this.itemsList[i] = [];
          items.forEach(element => {
            this.itemsList[i].push(element['name']);
          });
          if (this.itemsList.length === categories.length) {
            this.items[0] = this.itemsList[this.categories.findIndex((category) => category === 'BEER')];
          }
        });
      }
    });

    this.getDrinkers().subscribe(drinkers => {
      this.drinkers = [];
      drinkers.forEach(element => {
        this.drinkers.push(element['firstName'] + ' ' + element['lastName']);
      });
      this.transactionForm.get('payer').setValue(this.drinkers[0]);
    });
    this.transactionForm.get('dayIssued').setValue(this.daysOfWeek[0]);
  }


  ngOnInit() {
  }

  onSubmit() {
    const observables: Observable<any>[] = [];
    const quantities: number[] = [];
    const issued: string = this.convertIssued(this.transactionForm.value['dayIssued'], this.transactionForm.value['timeIssued']);
    const data: any[] = [this.seller, this.transactionForm.value, issued];

    this.transactionForm.value['itemsArray'].forEach(element => {
      observables.push(this.getItemPrice(element['name']));
      quantities.push(element['quantity']);
    });
    let total: number;
    forkJoin(observables).subscribe(prices => {
      total = this.calculateTotal(prices, quantities);
      data.push(total);
      this.addTransaction(data).subscribe(response => this.response = response );
    });
  }

  get itemsArray() {
    return this.transactionForm.get('itemsArray') as FormArray;
  }

  addItemRow() {
    return this.fb.group({
      category: [],
      name: [],
      quantity: []
    });
    }

  addItem() {
    this.itemsArray.push(this.addItemRow());
  }

  removeItem(index) {
    this.itemsArray.removeAt(index);
  }

  getDrinkers() {
    return this.http.get<string[]>('/api/bar/' + this.seller + '/drinkers');
  }

  getCategories() {
    return this.http.get<string[]>('/api/categories');
  }

  getItems(category: string) {
    return this.http.get<string[]>('/api/' + this.seller + '/items/' + category);
  }

  updateItems(selected: any, update: any) {
    this.itemsArray.at(update).get('name').setValue([this.itemsList[selected]]);
    this.items[update] = this.itemsList[selected];
  }

  getItemPrice(item: string) {
    return this.http.get('/api/' + this.seller + '/' + item + '/get_item_price');
  }

  calculateTotal(items: any, quantities: number[]) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i]['price'] * quantities[i];
    }
    this.finalTotal = total + this.transactionForm.value['tip'];
    return this.finalTotal;
  }

  convertIssued(dayIssued: string, timeIssued: string) {
    return dayIssued.charAt(0) + timeIssued.replace(':', '');
  }

  addTransaction(data: any[]) {
    return this.http.post('/api/add_transaction', data);
  }
}
