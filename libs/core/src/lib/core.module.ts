import { Configuration as PeopleApiConfiguration } from '@alten/apis/people';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import {
  NavigationActionTiming,
  routerReducer,
  RouterState,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ApiErrorEffects } from './effects/api-error.effects';
import { AppConfiguration } from './models/app-configuration.interface';
import {
  APP_ENVIRONMENT,
  AppEnvironment,
} from './tokens/app-environment.token';

export function providePeopleApiConfig(
  environment: AppEnvironment
): PeopleApiConfiguration {
  return environment.apis.people;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      { router: routerReducer },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictActionTypeUniqueness: true,
          strictActionWithinNgZone: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ApiErrorEffects]),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
      routerState: RouterState.Minimal,
    }),

    MatSnackBarModule,
  ],
})
export class CoreModule {
  public static forRoot(
    config: AppConfiguration
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: APP_ENVIRONMENT, useValue: config.environment },
        {
          provide: PeopleApiConfiguration,
          useFactory: providePeopleApiConfig,
          deps: [APP_ENVIRONMENT],
        },
      ],
    };
  }
}
