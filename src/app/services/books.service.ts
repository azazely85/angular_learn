import { Injectable } from '@angular/core';
import {Book} from '../models/Book';
import { of } from 'rxjs';

@Injectable()
export class BooksService {
  books: Book[] = [
      {
          id: '4545454545454',
          name: 'Test book',
          author: 'store',
          link: [
              {
                type: 'epub',
                link: 'link'
              }
          ],
          description: 'test'
      }
  ];
  constructor() { }

  getBooks() {
    return of(this.books);
  }

  getBookById(id: string) {

  }

  addBook(book: Book) {

  }

  editBook(book: Book) {

  }

  deleteBook(id: string) {

  }
}
