import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';


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
  dellItem(id) {
      this.basketService.dellItem(id);
  }
  dellAllItems() {
      this.basketService.dellAllItems();
  }

}
