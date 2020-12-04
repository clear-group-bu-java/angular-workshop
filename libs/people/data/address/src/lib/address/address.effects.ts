/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AddressesService } from '@alten/apis/people';
import { executeApiRequest } from '@alten/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, mapTo } from 'rxjs/operators';

import * as AddressActions from './address.actions';
import { Address } from './address.reducer';

@Injectable()
export class AddressEffects implements OnInitEffects {
  public readonly loadAddresses$ = createEffect(() => {
    return executeApiRequest(
      this.actions$,
      () => this.apiService.getAddresses(),
      AddressActions.loadAddresses,
      AddressActions.loadAddressesSuccess,
      AddressActions.loadAddressesFailure
    );
  });

  // TODO: Refactor to use generic executeApiRequest
  public readonly loadAddress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressActions.loadAddress),
      concatMap(({ id }) =>
        this.apiService.getAddressesId(id).pipe(
          map((data) => AddressActions.loadAddressSuccess({ data })),
          catchError((error: HttpErrorResponse) =>
            of(AddressActions.loadAddressFailure({ error: error.message }))
          )
        )
      )
    );
  });

  public readonly createAddress$ = createEffect(() => {
    return executeApiRequest<{ data: Address }>(
      this.actions$,
      ({ data }) => this.apiService.postAddresses(data),
      AddressActions.createAddress,
      AddressActions.createAddressSuccess,
      AddressActions.createAddressFailure
    );
  });

  public readonly updateAddress$ = createEffect(() => {
    return executeApiRequest<{ data: Address }>(
      this.actions$,
      ({ data }) => this.apiService.putAddressesId(data.id!, data),
      AddressActions.updateAddress,
      AddressActions.updateAddressSuccess,
      AddressActions.updateAddressFailure
    );
  });

  public readonly deleteAddress$ = createEffect(() => {
    return executeApiRequest<{ id: string }>(
      this.actions$,
      ({ id }) => this.apiService.deleteAddressesId(id).pipe(mapTo({ id })),
      AddressActions.deleteAddress,
      AddressActions.deleteAddressSuccess,
      AddressActions.deleteAddressFailure
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: AddressesService
  ) {}

  public ngrxOnInitEffects(): Action {
    return AddressActions.loadAddresses();
  }
}
