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
  }

  addBook(book) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name
    };
    this.basketService.addItem(newBasketItem).subscribe( book => {
      console.log(book);
    });
  }
}
