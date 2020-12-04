import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { genericApiError } from '../functions/api-request.functions';

@Injectable()
export class ApiErrorEffects {
  public readonly notifyOfApiError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(genericApiError),
        tap(({ error }) => {
          this.snackBar.open(error, 'Dismiss', {
            duration: 5000,
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly snackBar: MatSnackBar
  ) {}
}
