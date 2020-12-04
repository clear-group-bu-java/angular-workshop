import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressFormModule } from '../address-form/address-form.module';
import { AddressCreateComponent } from './address-create.component';

@NgModule({
  declarations: [AddressCreateComponent],
  imports: [CommonModule, AddressFormModule],
})
export class AddressCreateModule {}
