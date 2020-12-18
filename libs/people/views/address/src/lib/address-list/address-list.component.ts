import { ContainerComponent } from '@alten/core';
import { AddressFacade } from '@alten/people/data/address';
import { Component } from '@angular/core';

@Component({
  selector: 'alten-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent extends ContainerComponent {
  public readonly columnsToDisplay: ReadonlyArray<string> = [
    'street',
    'number',
    'zipCode',
    'city',
    'actions',
  ];

  constructor(public readonly addressFacade: AddressFacade) {
    super();
  }
}
