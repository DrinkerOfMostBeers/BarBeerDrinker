import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService, Beer } from '../beers.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})

export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      beerService.getBeer(this.beerName).subscribe(data => {
        this.beerDetails = data[0];
        this.sellsGraphHelper(data);
        this.consumersGraphHelper(data);
        this.timeDistributionGraphHelper(data);
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

  private sellsGraphHelper(data: any) {
    const xVal = [];
    const yVal = [];

    data[1].forEach(dataRow => {
      xVal.push(dataRow.seller);
      yVal.push(dataRow.count);
    });
    this.renderSellsGraph(xVal, yVal);
  }

  private consumersGraphHelper(data: any) {
    const xVal = [];
    const yVal = [];

    data[2].forEach(dataRow => {
      xVal.push(dataRow.payer);
      yVal.push(dataRow.count);
    });
    this.renderConsumersGraph(xVal, yVal);
  }

  private timeDistributionGraphHelper(data: any) {
    const timeCounts = Array.apply(null, Array(24)).map(Number.prototype.valueOf, 0);
    data[3].forEach(dataRow => {
      timeCounts[+dataRow.issued.substr(1, 2)]++;
    });
    const timeCountOrdered = [];
    for (let i = 6; i < 30; i++) {
      let num = i;
      if (i >= 24) {
        num = i - 24;
      }
      timeCountOrdered[i - 6] = timeCounts[num];
    }
    this.rendertimeDistributionGraph(timeCountOrdered);
  }
  private rendertimeDistributionGraph(counts: number[]) {
    Highcharts.chart('timeDistributionGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Time distribution of ' + this.beerName + ' sales'
      },
      lang: {
        noData: 'This beer hasn\'t been sold anywhere yet'
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            formatter: function() {
              if (this.y > 0) {
                return this.y;
            }
          }
        },
      }
    },
      xAxis: {
        categories: ['06:00 - 06:59', '07:00 - 07:59', '08:00 - 08:59', '09:00 - 09:59',
          '10:00 - 10:59', '11:00 - 11:59', '12:00 - 12:59', '13:00 - 13:59', '14:00 - 14:59',
          '15:00 - 15:59', '16:00 - 16:59', '17:00 - 17:59', '18:00 - 18:59', '19:00 - 19:59',
          '20:00 - 20:59', '21:00 - 21:59', '22:00 - 22:59', '23:00 - 23:59', '0:00 - 0:59', '1:00 - 1:59',
          '2:00 - 2:59', '3:00 - 3:59', '4:00 - 4:59', '5:00 - 5:59'],
        title: {
          text: 'Time Block'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of sales'
        },
        labels: {
          overflow: 'justify'
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

  private renderConsumersGraph(elements: string[], counts: number[]) {
    Highcharts.chart('consumersGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Biggest consumers of ' + this.beerName
      },
      lang: {
        noData: 'This beer hasn\'t been bought by anyone'
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
        },
      }
    },
      xAxis: {
        categories: elements,
        title: {
          text: 'Drinker Name'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of times bought'
        },
        labels: {
          overflow: 'justify'
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

  private renderSellsGraph(elements: string[], counts: number[]) {
    Highcharts.chart('sellsGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Bars where ' + this.beerName + ' is sold the most at'
      },
      lang: {
        noData: 'This beer hasn\'t been bought anywhere'
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
        },
      }
    },
      xAxis: {
        categories: elements,
        title: {
          text: 'Bar Name'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of times sold'
        },
        labels: {
          overflow: 'justify'
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

}
