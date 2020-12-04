/* eslint-disable @typescript-eslint/ban-types */
import { Dictionary, EntityAdapter } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  select,
  Selector,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionState } from '../models';

export class CollectionFacade<T> {
  public readonly collection$: Observable<ReadonlyArray<T>>;
  public readonly entities$: Observable<Dictionary<T>>;
  public readonly ids$: Observable<ReadonlyArray<string | number>>;
  public readonly total$: Observable<number>;
  public readonly selectedId$: Observable<string | number | undefined>;
  public readonly selectedEntity$: Observable<T | undefined>;
  public readonly error$: Observable<string | undefined>;

  constructor(
    protected readonly store: Store,
    protected readonly adapter: EntityAdapter<T>,
    protected readonly featureSelector: MemoizedSelector<
      object,
      CollectionState<T>
    >
  ) {
    const {
      selectAll,
      selectEntities,
      selectIds,
      selectTotal,
    } = adapter.getSelectors(featureSelector);

    const selectSelectedId = createSelector(
      featureSelector,
      (state) => state.selectedId
    );

    const selectSelectedEntity = createSelector(
      selectEntities,
      selectSelectedId,
      (entities, id) => (id ? entities[id] : undefined)
    );

    const selectError = createSelector(featureSelector, (state) => state.error);

    this.collection$ = this.select(selectAll);
    this.entities$ = this.select(selectEntities);
    this.ids$ = this.select(selectIds);
    this.total$ = this.select(selectTotal);
    this.selectedId$ = this.select(selectSelectedId);
    this.selectedEntity$ = this.select(selectSelectedEntity);
    this.error$ = this.select(selectError);
  }

  public select<R>(selector: Selector<object, R>): Observable<R> {
    return this.store.pipe(select(selector));
  }
}
