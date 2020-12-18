/* eslint-disable @typescript-eslint/no-explicit-any */
import { PeopleService, PersonDto } from '@alten/apis/people';
import { mock } from '@alten/core';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const peopleServiceMock = mock<PeopleService>();

  peopleServiceMock.getPeople.mockReturnValue(
    <Observable<any>>of(<Array<PersonDto>>[
      {
        id: '12345',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        cv: '',
        addressId: '54321',
      },
    ])
  );

  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent(peopleServiceMock);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should load people', () => {
    expect(app.people).toMatchSnapshot();
  });
});
