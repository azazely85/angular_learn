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

  constructor(
      public BookService: BooksService
  ) {  }

  ngOnInit() {
    this.BookService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

}
