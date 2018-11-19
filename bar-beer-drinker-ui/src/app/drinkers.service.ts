import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
   firstName: string;
   lastName: string;
   address: string;
   city: string;
   phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class DrinkersService {

  constructor(public http: HttpClient) { }

  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinker');
  }

  getDrinker(firstName: string, lastName: string) {

    return this.http.get<Drinker>('/api/drinker/' + firstName + ' ' + lastName);
  }
}
