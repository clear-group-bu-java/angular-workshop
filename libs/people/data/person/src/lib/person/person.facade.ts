import { PersonDto } from '@alten/apis/people';
import { CollectionFacade } from '@alten/core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { loadPersons } from './person.actions';
import { adapter } from './person.reducer';
import { selectPeopleWithAddress, selectPersonState } from './person.selectors';

@Injectable({ providedIn: 'root' })
export class PersonFacade extends CollectionFacade<PersonDto> {
  public readonly isAllowed$ = of(true);
  public readonly peopleWithAddress$ = this.select(selectPeopleWithAddress);

  constructor(store: Store) {
    super(store, adapter, selectPersonState);
  }

  public load(): void {
    this.dispatch(loadPersons());
  }
}
