import { Address, AddressFacade } from '@alten/people/data/address';
import { Component } from '@angular/core';

@Component({
  selector: 'alten-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.scss'],
})
export class AddressCreateComponent {
  constructor(private readonly addressFacade: AddressFacade) {}

  public save(address: Address): void {
    this.addressFacade.create(address);
  }
}
