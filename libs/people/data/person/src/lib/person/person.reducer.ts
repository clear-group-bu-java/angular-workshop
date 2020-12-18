/* eslint-disable @typescript-eslint/no-empty-interface */
import { PersonDto } from '@alten/apis/people';
import {
  CollectionState,
  createCreateOneReducer,
  getInitialState,
  produceOn,
  RequestState,
} from '@alten/core';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as PersonActions from './person.actions';

export const personFeatureKey = 'alten-person';

export interface State extends CollectionState<PersonDto> {
  customData?: string;
}

export const adapter: EntityAdapter<PersonDto> = createEntityAdapter<PersonDto>();
export const initialState = getInitialState<PersonDto>();

export const reducer = createReducer(
  initialState,

  on(PersonActions.loadPersons, (state) => ({
    ...state,
    readRequestState: RequestState.pending,
  })),
  on(PersonActions.loadPersonsSuccess, (state, action) =>
    adapter.setAll(action.data, {
      ...state,
      readRequestState: RequestState.success,
    })
  ),

  produceOn(PersonActions.loadPersonsFailure, (state, action) => {
    state.entities = {};
    state.ids = [];
    state.error = action.error;
    state.readRequestState = RequestState.failed;
  }),

  ...createCreateOneReducer<PersonDto>(
    adapter,
    PersonActions.createPerson,
    PersonActions.createPersonSuccess,
    PersonActions.createPersonFailure
  ),

  on(PersonActions.resetPersons, () => initialState)
);
