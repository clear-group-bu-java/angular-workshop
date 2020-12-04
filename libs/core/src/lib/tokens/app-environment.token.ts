import { Configuration as PeopleApiConfiguration } from '@alten/apis/people';
import { InjectionToken } from '@angular/core';

export interface AppEnvironment {
  production: boolean;
  apis: {
    people: PeopleApiConfiguration;
  };
}

export const APP_ENVIRONMENT = new InjectionToken('APP_ENVIRONMENT');
