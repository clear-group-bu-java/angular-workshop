import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

import { AddressListComponent } from './address-list.component';

@NgModule({
  declarations: [AddressListComponent],
  exports: [AddressListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class AddressListModule {}
