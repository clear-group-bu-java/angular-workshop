/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable sonarjs/no-identical-functions */
import { AddressDto } from '@alten/apis/people';
import {
  CollectionState,
  createCreateOneReducer,
  createLoadOneReducer,
  createUpdateOneReducer,
  getInitialState,
  produceOn,
  RequestState,
} from '@alten/core';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as AddressActions from './address.actions';

export const addressFeatureKey = 'address';

export type Address = AddressDto;

export interface State extends CollectionState<Address> {
  // add custom state here
}

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>();
export const initialState: State = getInitialState<Address>();

export const reducer = createReducer(
  initialState,

  // TODO: Refactor out like load one and update one
  produceOn(AddressActions.loadAddresses, (state) => {
    state.readRequestState = RequestState.pending;
  }),
  on(AddressActions.loadAddressesSuccess, (state, { data }) =>
    adapter.setAll(data, { ...state, readRequestState: RequestState.success })
  ),
  produceOn(AddressActions.loadAddressesFailure, (state, { error }) => {
    state.readRequestState = RequestState.failed;
    state.error = error;
  }),

  ...createLoadOneReducer<Address>(
    adapter,
    AddressActions.loadAddress,
    AddressActions.loadAddressSuccess,
    AddressActions.loadAddressFailure
  ),

  ...createCreateOneReducer<Address>(
    adapter,
    AddressActions.createAddress,
    AddressActions.createAddressSuccess,
    AddressActions.createAddressFailure
  ),

  ...createUpdateOneReducer<Address>(
    adapter,
    AddressActions.updateAddress,
    AddressActions.updateAddressSuccess,
    AddressActions.updateAddressFailure
  ),

  // TODO: Refactor out like load one and update one
  produceOn(AddressActions.deleteAddress, (state) => {
    state.updateRequestState = RequestState.pending;
  }),
  on(AddressActions.deleteAddressSuccess, (state, { data }) =>
    adapter.removeOne(data.id, {
      ...state,
      updateRequestState: RequestState.success,
    })
  ),
  produceOn(AddressActions.deleteAddressFailure, (state, { error }) => {
    state.readRequestState = RequestState.failed;
    state.error = error;
  }),

  produceOn(AddressActions.selectAddressId, (state, { selectedId }) => {
    state.selectedId = selectedId;
    return state;
  }),

  on(AddressActions.resetAddresses, () => initialState)
);
