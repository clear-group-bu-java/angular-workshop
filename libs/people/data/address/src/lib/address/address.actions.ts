import { createAction, props } from '@ngrx/store';

import { Address } from './address.reducer';

export const loadAddresses = createAction('[Address] Load Addresses');
export const loadAddressesSuccess = createAction(
  '[Address] Load Addresses Success',
  props<{ data: Array<Address> }>()
);
export const loadAddressesFailure = createAction(
  '[Address] Load Addresses Failure',
  props<{ error: string }>()
);

export const loadAddress = createAction(
  '[Address] Load Address',
  props<{ id: string }>()
);
export const loadAddressSuccess = createAction(
  '[Address] Load Address Success',
  props<{ data: Address }>()
);
export const loadAddressFailure = createAction(
  '[Address] Load Address Failure',
  props<{ error: string }>()
);

export const createAddress = createAction(
  '[Address] Create Address',
  props<{ data: Address }>()
);
export const createAddressSuccess = createAction(
  '[Address] Create Address Success',
  props<{ data: Address }>()
);
export const createAddressFailure = createAction(
  '[Address] Create Address Failure',
  props<{ error: string }>()
);

export const updateAddress = createAction(
  '[Address] Update Address',
  props<{ data: Address }>()
);
export const updateAddressSuccess = createAction(
  '[Address] Update Address Success',
  props<{ data: Address }>()
);
export const updateAddressFailure = createAction(
  '[Address] Update Address Failure',
  props<{ error: string }>()
);

export const deleteAddress = createAction(
  '[Address] Delete Address',
  props<{ id: string }>()
);
export const deleteAddressSuccess = createAction(
  '[Address] Delete Address Success',
  props<{ data: { id: string } }>()
);
export const deleteAddressFailure = createAction(
  '[Address] Delete Address Failure',
  props<{ error: string }>()
);
export const selectAddressId = createAction(
  '[Address] Select Address by ID',
  props<{ selectedId: string }>()
);
export const resetAddresses = createAction('[Address] Reset Addresses');
