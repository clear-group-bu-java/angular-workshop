import { mock } from '@alten/core';
import { AddressFacade } from '@alten/people/data/address';

import { AddressCreateComponent } from './address-create.component';

describe('AddressCreateComponent', () => {
  const addressFacadeMock = mock<AddressFacade>();
  let component: AddressCreateComponent;

  beforeEach(() => {
    component = new AddressCreateComponent(addressFacadeMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
