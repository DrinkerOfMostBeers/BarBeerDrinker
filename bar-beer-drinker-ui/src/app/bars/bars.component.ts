import { Component, OnInit } from '@angular/core';

import { BarsService, Bar } from '../bars.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})

export class BarsComponent implements OnInit {

  bars: Bar[];

  constructor(public barService: BarsService) {
    this.getBars();
  }

  ngOnInit() {
  }

  getBars() {
    this.barService.getBars().subscribe(data => {
      this.bars = data;
    },
      error => {
        alert('Could not retrieve the list of bars');
      });
  }
}
