import { Injectable } from '@angular/core';
import { Currency } from '../models/Currency';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency: Currency[] = [
      {
        name: 'USD',
        isActive: true,
        coefficient: 1
      },
      {
        name: 'EUR',
        isActive: false,
        coefficient: 0.5
      },
      {
        name: 'GBP',
        isActive: false,
        coefficient: 0.9
      }
  ];
  private currencySourse = new BehaviorSubject<Currency[]>(this.currency);
  selectedCurrency = this.currencySourse.asObservable();

  constructor() { }

  selectCurrency(name: string) {

  }
}
