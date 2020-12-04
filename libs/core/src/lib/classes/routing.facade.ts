import { Injectable } from '@angular/core';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, select, Store } from '@ngrx/store';

export const selectRouting = createFeatureSelector<RouterReducerState>(
  'router'
);

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectRouteData,
  selectRouteParams,
  selectUrl,
} = getSelectors(selectRouting);

@Injectable({ providedIn: 'root' })
export class RoutingFacade {
  public readonly currentRoute$ = this.store.pipe(select(selectCurrentRoute));
  public readonly fragment$ = this.store.pipe(select(selectFragment));
  public readonly queryParams$ = this.store.pipe(select(selectQueryParams));
  public readonly routeData$ = this.store.pipe(select(selectRouteData));
  public readonly routeParams$ = this.store.pipe(select(selectRouteParams));
  public readonly url$ = this.store.pipe(select(selectUrl));

  constructor(private readonly store: Store<{ router: RouterReducerState }>) {}
}
