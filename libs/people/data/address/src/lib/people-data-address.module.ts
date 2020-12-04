import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AddressEffects } from './address/address.effects';
import * as fromAddress from './address/address.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAddress.addressFeatureKey, fromAddress.reducer),
    EffectsModule.forFeature([AddressEffects]),
  ],
})
export class PeopleDataAddressModule {}
