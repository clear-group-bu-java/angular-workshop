/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { addressSelectors } from '@alten/people/data/address';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPerson from './person.reducer';

export const selectPersonState = createFeatureSelector<fromPerson.State>(
  fromPerson.personFeatureKey
);

const peopleSelectors = fromPerson.adapter.getSelectors(selectPersonState);

export const selectPeopleWithAddress = createSelector(
  peopleSelectors.selectAll,
  addressSelectors.selectEntities,
  (people, addresses) =>
    people.map((person) => ({
      ...person,
      address: addresses[person.id!],
    }))
);
