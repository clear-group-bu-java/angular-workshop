import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { AddressCreateComponent } from './address-create/address-create.component';
import { AddressCreateModule } from './address-create/address-create.module';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressEditModule } from './address-edit/address-edit.module';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressListModule } from './address-list/address-list.module';
import { AddressEffects } from './effects/address.effects';

@NgModule({
  imports: [
    CommonModule,
    AddressListModule,
    AddressCreateModule,
    AddressEditModule,
    RouterModule.forChild([
      { path: '', component: AddressListComponent },
      { path: 'new', component: AddressCreateComponent },
      { path: ':id/edit', component: AddressEditComponent },
    ]),
    EffectsModule.forFeature([AddressEffects]),
  ],
  exports: [RouterModule],
})
export class PeopleViewsAddressModule {}
