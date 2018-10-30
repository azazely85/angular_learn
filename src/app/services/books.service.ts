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
    const book = this.books.find(data => data.id === id);
    return of(book);
  }

  addBook(book: Book) {

  }

  editBook(book: Book) {
    this.books = this.books.map( data => {
        if (book.id === data.id) {
            data = book;
        }
        return data;
    });
    return of(book);
  }

  deleteBook(id: string) {

  }
}
