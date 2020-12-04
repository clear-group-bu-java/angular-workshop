import { EntityAdapter } from '@ngrx/entity';
import { ActionCreator, On, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { CollectionState } from '../models/collection-state.interface';
import { RequestState } from '../models/request-state.enum';

export type CreateOneStart<T, A extends string> = ActionCreator<
  A,
  (props: {
    data: Exclude<T, 'id'>;
  }) => {
    data: Exclude<T, 'id'>;
  } & TypedAction<A>
>;

export type CreateOneSuccess<T, A extends string> = ActionCreator<
  A,
  (props: {
    data: T;
  }) => {
    data: T;
  } & TypedAction<A>
>;

export type CreateOneFailure<A extends string> = ActionCreator<
  A,
  (props: {
    error: string;
  }) => {
    error: string;
  } & TypedAction<A>
>;

export function createCreateOneReducer<
  T,
  State extends CollectionState<T> = CollectionState<T>
>(
  adapter: EntityAdapter<T>,
  start: CreateOneStart<T, string>,
  success: CreateOneSuccess<T, string>,
  failure: CreateOneFailure<string>
): Array<On<State>> {
  return [
    on(start, (state) => ({
      ...state,
      updateRequestState: RequestState.pending,
    })),
    on(success, (state, { data }) =>
      adapter.setOne(data, {
        ...state,
        updateRequestState: RequestState.success,
      })
    ),
    on(failure, (state, { error }) => ({
      ...state,
      updateRequestState: RequestState.failed,
      error,
    })),
  ];
}
