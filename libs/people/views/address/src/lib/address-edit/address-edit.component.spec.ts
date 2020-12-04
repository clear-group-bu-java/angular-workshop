import { mock, RoutingFacade } from '@alten/core';
import { AddressFacade } from '@alten/people/data/address';

import { AddressEditComponent } from './address-edit.component';

describe('AddressEditComponent', () => {
  const addressFacadeMock = mock<AddressFacade>();
  const routingFacadeMock = mock<RoutingFacade>();

  let component: AddressEditComponent;

  beforeEach(() => {
    component = new AddressEditComponent(addressFacadeMock, routingFacadeMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
