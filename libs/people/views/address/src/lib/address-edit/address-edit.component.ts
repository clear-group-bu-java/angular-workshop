import { ContainerComponent, RoutingFacade } from '@alten/core';
import { Address, AddressFacade } from '@alten/people/data/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alten-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss'],
})
export class AddressEditComponent extends ContainerComponent implements OnInit {
  constructor(
    public readonly addressFacade: AddressFacade,
    private readonly routingFacade: RoutingFacade
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribeTo(
      this.routingFacade.routeParams$,
      (params: { id?: string }) => {
        if (params.id) {
          this.addressFacade.selectId(params.id);
        }
      }
    );
  }

  public save(address: Address): void {
    this.addressFacade.update(address);
  }
}
