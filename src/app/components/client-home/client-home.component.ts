import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  books: Book[];
  constructor(
      public bookService: BooksService,
      public basketService: BasketService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
    this.basketService.clearAllItemsEvent.subscribe( status => {
      if (status) {
        this.books.forEach( book => book.isAdded = false);
      }
    });
    this.basketService.deleteItemsEvent.subscribe( id => {
      if (id) {
        this.books.forEach( book => {
          if (book.id === id) {
            book.isAdded = false;
          }
        });
      }
    });
  }

  addBook(book) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name
    };
    this.basketService.addItem(newBasketItem).subscribe( item => {
      console.log(item);
    });
  }

    deleteBook(id) {
      this.basketService.dellItem(id);
    }
}
