import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveComponentModule } from '@ngrx/component';

import { AddressFormModule } from '../address-form/address-form.module';
import { AddressEditComponent } from './address-edit.component';

@NgModule({
  declarations: [AddressEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AddressFormModule,
  ],
})
export class AddressEditModule {}
