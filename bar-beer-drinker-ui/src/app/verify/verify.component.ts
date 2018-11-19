import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  patterns: string[] = [
    'A Drinker cannot frequent a bar that is in another city than where they live',
    'Transactions can’t be issued at times when the bar is closed',
    'For every two beers, b1 and b2, b1 should either be less/more expensive than b2 in ALL bars'
  ];

  queries: string[] = [
    'SELECT NOT EXISTS (SELECT * FROM drinkers d, frequents f WHERE d.firstName=f.drinkerFirstName \
      AND d.lastName=f.drinkerLastName AND d.city <> (SELECT b.city FROM bars b WHERE b.name=f.bar)) AS chk',

    'SELECT NOT EXISTS (SELECT * FROM transactions t, bars b WHERE t.seller=b.name AND NOT( \
        IF(CONVERT(SUBSTRING(t.issued, 2), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)+2400, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)) > \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+1, 4), unsigned integer) \
        AND \
        IF(CONVERT(SUBSTRING(t.issued, 2), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)+2400, CONVERT(SUBSTRING(t.issued, 2), unsigned integer)) < \
        IF(CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer)+2400, \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer)))) AS chk',

    'SELECT NOT EXISTS (SELECT * FROM sells s, sells s1, sells s2, sells s3 WHERE s.bar=s1.bar AND s2.bar=s3.bar AND \
          s.bar<>s2.bar AND s.item=s2.item AND s1.item=s3.item AND s.price > s1.price AND s2.price < s3.price) AS chk'
  ];

  response: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  verifyClicked(num: number) {
    this.verifyPattern(this.queries[num]).subscribe(response => {
      if (response[0]['chk'] === '0') {
        this.response[num] = 'False';
      } else {
        this.response[num] = 'True';
      }
    });
  }

  verifyPattern(query: string) {
    return this.http.post('/api/query', query);
  }
}
