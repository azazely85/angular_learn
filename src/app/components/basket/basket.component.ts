import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems = [];
  constructor(
      public basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketService.getBasketItem().subscribe( items => {
      this.basketItems = items;
    });
  }

}
