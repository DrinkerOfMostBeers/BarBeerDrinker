import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifications',
  templateUrl: './modifications.component.html',
  styleUrls: ['./modifications.component.css']
})
export class ModificationsComponent implements OnInit {

  queryForm = this.fb.group({
    query: ['', [Validators.required, this.operationValidator()]]
  });
  response: any;

  constructor(public http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.modifyDatabase(this.queryForm.value['query']).subscribe(response => {
      const rStr: string = response.toString();
      this.response = rStr.substring(rStr.indexOf('"') + 1, rStr.lastIndexOf('"'));
    });
  }

  modifyDatabase(query: string) {
    return this.http.post('/api/query', query);
  }

  operationValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isModify = (new RegExp(/insert|update|delete/im)).test(control.value);
      return isModify ? null : {'error': 'Couldn\'t find an INSERT/UPDATE/DELETE keyword'};
    };
  }
}
