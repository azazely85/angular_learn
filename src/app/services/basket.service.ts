import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  purchaseList: Book[] = [];

  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book) {
    this.purchaseList.push(book);
    return of(book);
  }

  dellItem(id) {

  }
}
