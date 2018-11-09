import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];
  searchResult: Book[] = [];
  searchText: string;
  constructor(
      public BookService: BooksService
  ) {  }

  ngOnInit() {
    this.BookService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  searchBook() {
    this.searchResult = this.books.filter( book => book.name.toLowerCase().indexOf(this.searchText) !== -1);
  }
}
