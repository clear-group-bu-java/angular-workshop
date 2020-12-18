import { createFeatureSelector } from '@ngrx/store';

import * as fromAddress from './address.reducer';

export const selectAddressesState = createFeatureSelector<fromAddress.State>(
  fromAddress.addressFeatureKey
);

export const addressSelectors = fromAddress.adapter.getSelectors(
  selectAddressesState
);
