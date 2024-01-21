import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction(
  '[Book] Book added successfully',
  props<Book>()
);
export const AddBookFailure = createAction(
  '[Book] Book added failed',
  props<{ error: any }>()
);
export const RemoveBook = createAction(
  '[Book] Book removed',
  props<{ bookId: string }>()
);
