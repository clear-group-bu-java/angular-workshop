/* eslint-disable @typescript-eslint/no-explicit-any */
import { PeopleService } from '@alten/apis/people';
import { mock } from '@alten/core';
import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const peopleServiceMock = mock<PeopleService>();

  peopleServiceMock.getPeople.mockReturnValue(
    of(<any>[
      {
        id: '12345',
        firstName: 'Test',
        lastname: 'User',
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
