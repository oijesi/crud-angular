import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Item } from './../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly API = '/assets/items.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Item[]>(this.API)
    .pipe(
      first(),
      delay(3000),
      tap(items => console.log(items))
    );
  }
}
