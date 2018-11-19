import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queryForm = this.fb.group({
    query: ['', [Validators.required, this.operationValidator()]]
  });
  response: any;
  table: any;
  headers: string[] = [];

  constructor(public http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.response = undefined;
    this.table = undefined;
    this.modifyDatabase(this.queryForm.value['query']).subscribe(response => {
      if (response.toString().charAt(0) !== '[') {
        if (response.toString().length === 0) {
          this.response = '0 rows returned';
        } else {
          const rStr: string = response.toString();
          this.response = rStr.substring(rStr.indexOf('"') + 1, rStr.lastIndexOf('"'));
        }
      } else {
        this.headers = (Object.keys(response[0]));
        this.table = response;
      }
    });
  }

  modifyDatabase(query: string) {
    return this.http.post('/api/query', query);
  }

  operationValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.queryForm !== undefined) {
      }
      const isModify = (new RegExp(/insert|update|delete/im)).test(control.value);
      return isModify ? { 'error': 'Couldn\'t find an INSERT/UPDATE/DELETE keyword' } : null;
    };
  }
}
