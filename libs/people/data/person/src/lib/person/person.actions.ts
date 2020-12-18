import { PersonDto } from '@alten/apis/people';
import { createAction, props } from '@ngrx/store';

export const loadPersons = createAction('[Person] Load Persons');

export const loadPersonsSuccess = createAction(
  '[Person] Load Persons Success',
  props<{ data: Array<PersonDto> }>()
);

export const loadPersonsFailure = createAction(
  '[Person] Load Persons Failure',
  props<{ error: string }>()
);

export const createPerson = createAction(
  '[Person] Create Person',
  props<{ data: PersonDto }>()
);
export const createPersonSuccess = createAction(
  '[Person] Create Person Success',
  props<{ data: PersonDto }>()
);
export const createPersonFailure = createAction(
  '[Person] Create Person Failure',
  props<{ error: string }>()
);

export const resetPersons = createAction('[Person] Reset Persons');
