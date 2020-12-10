import { CollectionFacade } from '@alten/core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  createAddress,
  deleteAddress,
  loadAddresses,
  resetAddresses,
  selectAddressId,
  updateAddress,
} from './address.actions';
import { adapter, Address } from './address.reducer';
import { selectAddressesState } from './address.selectors';

@Injectable({ providedIn: 'root' })
export class AddressFacade extends CollectionFacade<Address> {
  constructor(store: Store) {
    super(store, adapter, selectAddressesState);
  }

  public load(): void {
    this.dispatch(loadAddresses());
  }

  public create(address: Address): void {
    const data = { ...address, id: undefined };
    this.dispatch(createAddress({ data }));
  }

  public update(data: Address): void {
    this.dispatch(updateAddress({ data }));
  }

  public delete(id: string): void {
    this.dispatch(deleteAddress({ id }));
  }

  public selectId(selectedId: string): void {
    this.dispatch(selectAddressId({ selectedId }));
  }

  public reset(): void {
    this.dispatch(resetAddresses());
  }
}
