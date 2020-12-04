import { createAddressSuccess } from '@alten/people/data/address';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class AddressEffects {
  public readonly redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createAddressSuccess),
        tap(({ data }) => {
          this.router.navigate(['/addresses', data.id, 'edit']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}
}
