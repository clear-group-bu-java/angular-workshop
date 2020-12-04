import { Configuration } from '@alten/apis/people';
import { AppEnvironment } from '@alten/core';

export const environment: AppEnvironment = {
  production: true,
  apis: {
    people: new Configuration({ basePath: 'http://localhost:3000' }),
  },
};
