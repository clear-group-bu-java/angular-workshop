import { mock } from '@alten/core';
import { AddressFacade } from '@alten/people/data/address';

import { AddressListComponent } from './address-list.component';

describe('AddressListComponent', () => {
  const addressFacadeMock = mock<AddressFacade>();

  let component: AddressListComponent;

  beforeEach(() => {
    component = new AddressListComponent(addressFacadeMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
