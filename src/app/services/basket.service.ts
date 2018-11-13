import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import {BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  purchaseList: Book[] = [];
  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();
  private deleteSource = new BehaviorSubject('');
  deleteItemsEvent = this.deleteSource.asObservable();
  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book) {
    this.purchaseList.push(book);
    return of(book);
  }

  dellItem(id) {
    for ( let i = 0; i < this.purchaseList.length; i++) {
      if (this.purchaseList[i].id === id) {
        this.purchaseList.splice(i, 1);
        this.deleteSource.next(id);
        break;
      }
    }
  }

  dellAllItems() {
      this.purchaseList.splice(0, this.purchaseList.length);
      this.clearSource.next(true);
  }
}
