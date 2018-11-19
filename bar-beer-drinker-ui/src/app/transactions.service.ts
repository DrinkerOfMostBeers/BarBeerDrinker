import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Transaction {
  transactionId: number;
  seller: string;
  payer: string;
  bought: string;
  quantity: number;
  total: number;
  issued: string;
}
@Injectable({
  providedIn: 'root'
})

export class TransactionsService {
  static daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(public http: HttpClient) { }

  getTransactions(drinker: string) {
    const firstName = drinker.substring(0, drinker.indexOf(' '));
    const lastName = drinker.substring(drinker.indexOf(' ') + 1);
    return this.http.get<Transaction[]>('/api/drinker/' + firstName + ' ' + lastName + '/transactions');
  }
}
