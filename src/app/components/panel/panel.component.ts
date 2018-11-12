import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];
  searchResult: Book[] = [];
  searchText: string;
  currentCurrency: Currency;
  constructor(
      public BookService: BooksService,
      public currencyService: CurrencyService
  ) {  }

  ngOnInit() {
    this.BookService.getBooks().subscribe((books: Book[]) => this.books = books);
    this.currencyService.selectedCurrency.subscribe( data => {
    this.currentCurrency = Object.create(data.find( obj => obj.isActive));
    });
  }

  searchBook() {
    this.searchResult = this.books.filter( book => book.name.toLowerCase().indexOf(this.searchText) !== -1);
  }
}
