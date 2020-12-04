import { EntityAdapter } from '@ngrx/entity';
import { ActionCreator, On, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { CollectionState } from '../models/collection-state.interface';
import { RequestState } from '../models/request-state.enum';

export type LoadOneStart<A extends string> = ActionCreator<
  A,
  (props: {
    id: string;
  }) => {
    id: string;
  } & TypedAction<A>
>;

export type LoadOneSuccess<T, A extends string> = ActionCreator<
  A,
  (props: {
    data: T;
  }) => {
    data: T;
  } & TypedAction<A>
>;

export type LoadOneFailure<A extends string> = ActionCreator<
  A,
  (props: {
    error: string;
  }) => {
    error: string;
  } & TypedAction<A>
>;

export function createLoadOneReducer<
  T,
  State extends CollectionState<T> = CollectionState<T>
>(
  adapter: EntityAdapter<T>,
  start: LoadOneStart<string>,
  success: LoadOneSuccess<T, string>,
  failure: LoadOneFailure<string>
): Array<On<State>> {
  return [
    on(start, (state) => ({
      ...state,
      readRequestState: RequestState.pending,
    })),
    on(success, (state, { data }) =>
      adapter.setOne(data, { ...state, readRequestState: RequestState.success })
    ),
    on(failure, (state, { error }) => ({
      ...state,
      readRequestState: RequestState.failed,
      error,
    })),
  ];
}
