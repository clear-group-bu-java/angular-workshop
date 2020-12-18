import { PeopleService } from '@alten/apis/people';
import { executeApiRequest } from '@alten/core';
import { Injectable } from '@angular/core';
import { Actions, createEffect, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as PersonActions from './person.actions';

@Injectable()
export class PersonEffects implements OnInitEffects {
  public readonly loadPeople$ = createEffect(() =>
    executeApiRequest(
      this.actions$,
      () => this.peopleService.getPeople(),
      PersonActions.loadPersons,
      PersonActions.loadPersonsSuccess,
      PersonActions.loadPersonsFailure
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly peopleService: PeopleService
  ) {}

  public ngrxOnInitEffects(): Action {
    return PersonActions.loadPersons();
  }
}
