import { mock } from '@alten/core';
import { Address, AddressFacade } from '@alten/people/data/address';

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

  describe('create', () => {
    it('should call create on facade', () => {
      const address: Address = {
        street: 'Example street',
        number: '42 a',
        city: { zipCode: '12345', name: 'Unknown' },
      };

      component.save(address);

      expect(addressFacadeMock.create).toHaveBeenCalledWith(address);
    });
  });
});
