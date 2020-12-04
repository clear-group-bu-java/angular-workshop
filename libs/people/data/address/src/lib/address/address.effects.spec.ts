import { AddressesService } from '@alten/apis/people';
import { mock } from '@alten/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddressEffects } from './address.effects';

describe('AddressEffects', () => {
  const addressesServiceMock = mock<AddressesService>();

  let actions$: Observable<Action>;
  let effects: AddressEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressEffects,
        provideMockActions(() => actions$),
        { provide: AddressesService, useFactory: () => addressesServiceMock },
      ],
    });

    effects = TestBed.inject(AddressEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
