import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BookActions from './book.actions';
import { BookService } from './book.service';
import { map, mergeMap, catchError, of } from 'rxjs';

@Injectable()
export class BookEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          map((book) => BookActions.AddBookSuccess(book)),
          catchError((error) => of(BookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
