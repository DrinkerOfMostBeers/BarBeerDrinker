import { Component, OnInit } from '@angular/core';
import { Drinker, DrinkersService } from '../drinkers.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TransactionsService } from '../transactions.service';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      const firstName = this.drinkerName.substring(0, this.drinkerName.indexOf(' '));
      const lastName = this.drinkerName.substring(this.drinkerName.indexOf(' ') + 1);

      drinkerService.getDrinker(firstName, lastName).subscribe(data => {
        this.drinkerDetails = data[0];
        this.ordersGraphHelper(data);
        this.spentGraphHelper(data);
      });
    },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          console.error(error.status + ' - ' + error.body);
          alert('An error occurred on the server. Check the browser console');
        }
      });
  }

  private ordersGraphHelper(data: any) {
    const xVal = [];
    const yVal = [];
    data[1].forEach(dataRow => {
      xVal.push(dataRow.bought);
      yVal.push(dataRow.count);
    });
    this.renderOrdersGraph(xVal, yVal);
  }

  private renderOrdersGraph(elements: string[], counts: number[]) {
    Highcharts.chart('ordersGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Items Ordered by ' + this.drinkerName
      },
      lang: {
        noData: 'This drinker has\'t ordered anything'
      },
      xAxis: {
        categories: elements,
        title: {
          text: 'Name of item ordered'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of times ordered'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }

  private spentGraphHelper(data: any) {
    data = data[2];
    for (let i = 0; i < 7; i++) {
      const dayData = data[i];
      const xVal = [];
      const yVal = [];
      dayData.forEach(element => {
        xVal.push(element.seller);
        yVal.push(element.sum);
      });
      this.renderSpentGraph(TransactionsService.daysOfWeek[i], xVal, yVal);
      xVal.length = 0;
      yVal.length = 0;
    }
  }

  private renderSpentGraph(dayOfWeek: string, elements: string[], counts: number[]) {
    Highcharts.chart(dayOfWeek.toLowerCase() + 'SpendingsGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Money Spent by ' + this.drinkerName + ' on ' + dayOfWeek + '\'s'
      },
      lang: {
        noData: 'This drinker has\'t ordered anything'
      },
      xAxis: {
        categories: elements,
        title: {
          text: 'Bar Spent At'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Spent'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }



  ngOnInit() {
  }

}
