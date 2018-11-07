import { Injectable } from '@angular/core';
import {Book} from '../models/Book';
import {Observable, of} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class BooksService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;

  constructor(
      private afs: AngularFirestore
  ) {
      this.booksCollection = this.afs.collection('books');
  }

  getBooks() {
    this.books = this.booksCollection.snapshotChanges().pipe(
        map(collection => collection.map(document => {
            const data = document.payload.doc.data() as Book;
            const id = document.payload.doc.id;
            return { id, ...data };
        })));
    return this.books;
  }

  getBookById(id: string) {
      return;
  }

  addBook(book: Book) {
      return of(book);
  }

  editBook(book: Book) {
    return;
  }

  deleteBook(id: string) {

  }
}
