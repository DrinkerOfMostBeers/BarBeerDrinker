import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar } from '../bars.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;

  message: string;

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(data => {
        this.barDetails = data[0];
        this.barDetails.hours = this.formatHours(this.barDetails.hours);
        this.interestingGraphHelper(data);
        this.busyGraphHelper(data);
      },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Check the browser console');
          }
        });
    }
    );
  }

  ngOnInit() {
  }

  private formatHours(hours: string) {
    if (hours.length === 0) {
      return '';
    }

    return hours.charAt(0) + ' ' + hours.substr(1, 2) + ':' + hours.substr(3, 2) + '-' + hours.substr(5, 2)
      + ':' + hours.substr(7, 2) + '\n' + (hours.charAt(0) === 'U' ? '' : ' ') + this.formatHours(hours.substr(9));
  }

  private interestingGraphHelper(data: any) {
    const xVal = [];
    const yVal = [];

    data[1].forEach(dataRow => {
      xVal.push(dataRow.payer);
      yVal.push(dataRow.total);
    });
    this.renderInterestingBarGraphs('spenderGraph', xVal, yVal, 'Spender', 'Biggest Spenders At', 'Total Money Spent',
      'No one has spent any money here yet');
    xVal.length = 0;
    yVal.length = 0;


    data[2].forEach(dataRow => {
      xVal.push(dataRow.bought);
      yVal.push(dataRow.count);
    });
    this.renderInterestingBarGraphs('beerGraph', xVal, yVal, 'Beer', 'Most Popular Beers At ',
      'Number of transactions', 'No beers have been bought from here yet');
    xVal.length = 0;
    yVal.length = 0;

    data[3].forEach(dataRow => {
      xVal.push(dataRow.manufacturer);
      yVal.push(dataRow.count);
    });
    this.renderInterestingBarGraphs('manufacturerGraph', xVal, yVal, 'Manufacturer', 'Favorite Manufacturers At ',
      'Number of transactions', 'No items from any manufacturers were bought from here');
  }

  private busyGraphHelper(data: any) {
    const timeCounts = Array.apply(null, Array(24)).map(Number.prototype.valueOf, 0);
    const dayCounts = Array.apply(null, Array(7)).map(Number.prototype.valueOf, 0);
    const daysOfWeek = 'MTWRFSU';
    data[4].forEach(dataRow => {
      timeCounts[+dataRow.issued.substr(1, 2)]++;
      dayCounts[daysOfWeek.indexOf(dataRow.issued.charAt(0))]++;
    });
    const timeCountOrdered = [];
    for (let i = 6; i < 30; i++) {
      let num = i;
      if (i >= 24) {
        num = i - 24;
      }
      timeCountOrdered[i - 6] = timeCounts[num];
    }

    this.renderBusyTimeGraph(timeCountOrdered);
    this.renderBusyDayGraph(dayCounts);
  }

  private renderBusyDayGraph(counts: number[]) {
    Highcharts.chart('dayDistributionGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Day distribution of sales at ' + this.barName
      },
      lang: {
        noData: 'This bar hasn\'t sold anything yet'
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
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        title: {
          text: 'Day of Week'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of transactions'
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

  private renderBusyTimeGraph(counts: number[]) {
    Highcharts.chart('timeDistributionGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Time distribution of sales at ' + this.barName
      },
      lang: {
        noData: 'This bar hasn\'t sold anything yet'
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
          text: 'Number of transactions'
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

  private renderInterestingBarGraphs(graphName: string, elements: string[], counts: number[],
    xLabel: string, title: string, yLabel: string, errorMessage: string) {

    Highcharts.chart(graphName, {
      chart: {
        type: 'column'
      },
      title: {
        text: title + ' ' + this.barName
      },
      lang: {
        noData: errorMessage
      },
      xAxis: {
        categories: elements,
        title: {
          text: xLabel
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: yLabel
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
}
