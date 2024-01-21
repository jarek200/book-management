import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.actions';
import { Book } from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, book) => [...state, book]),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
);
