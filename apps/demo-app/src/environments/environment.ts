import 'zone.js/dist/zone-error';

import { Configuration } from '@alten/apis/people';
import { AppEnvironment } from '@alten/core';

export const environment: AppEnvironment = {
  production: false,
  apis: {
    people: new Configuration({ basePath: 'http://localhost:3000' }),
  },
};
