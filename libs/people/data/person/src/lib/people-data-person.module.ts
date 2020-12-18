import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PersonEffects } from './person/person.effects';
import * as fromPerson from './person/person.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPerson.personFeatureKey, fromPerson.reducer),
    EffectsModule.forFeature([PersonEffects]),
  ],
})
export class PeopleDataPersonModule {}
