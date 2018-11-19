import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionsService } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  drinkerName: string;
  transactions: Transaction[];

  constructor(
    private transactionsService: TransactionsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      transactionsService.getTransactions(this.drinkerName).subscribe(data => {
        this.transactions = data;
        this.transactions.forEach(element => {
          const issued = element.issued;
          let dayOfWeek;
          switch (issued.charAt(0)) {
            case 'M': {
              dayOfWeek = 'Monday';
              break;
            }
            case 'T': {
              dayOfWeek = 'Tuesday';
              break;
            }
            case 'W': {
              dayOfWeek = 'Wednesday';
              break;
            }
            case 'R': {
              dayOfWeek = 'Thursday';
              break;
            }
            case 'F': {
              dayOfWeek = 'Friday';
              break;
            }
            case 'S': {
              dayOfWeek = 'Saturday';
              break;
            }
            case 'U': {
              dayOfWeek = 'Sunday';
              break;
            }
          }

          element.issued = dayOfWeek + ' ' + issued.substr(1, 2) + ':' + issued.substr(3);
        });
      },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          console.error(error.status + ' - ' + error.body);
          alert('An error occurred on the server. Check the browser console');
        }
      });
    });
  }

  ngOnInit() {
  }

}
