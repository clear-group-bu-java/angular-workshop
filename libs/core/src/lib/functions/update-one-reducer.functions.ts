import { EntityAdapter } from '@ngrx/entity';
import { ActionCreator, On, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { CollectionState } from '../models/collection-state.interface';
import { RequestState } from '../models/request-state.enum';
import { produceOn, Writable } from './produce-on.function';

export type UpdateOneStart<T, A extends string> = ActionCreator<
  A,
  (props: {
    data: T;
  }) => {
    data: T;
  } & TypedAction<A>
>;

export type UpdateOneSuccess<T, A extends string> = ActionCreator<
  A,
  (props: {
    data: T;
  }) => {
    data: T;
  } & TypedAction<A>
>;

export type UpdateOneFailure<A extends string> = ActionCreator<
  A,
  (props: {
    error: string;
  }) => {
    error: string;
  } & TypedAction<A>
>;

export function createUpdateOneReducer<
  T,
  State extends CollectionState<T> = CollectionState<T>
>(
  adapter: EntityAdapter<T>,
  start: UpdateOneStart<T, string>,
  success: UpdateOneSuccess<T, string>,
  failure: UpdateOneFailure<string>
): Array<On<State>> {
  return [
    produceOn(start, (state) => {
      state.updateRequestState = <Writable<State['updateRequestState']>>(
        RequestState.pending
      );
    }),
    on(success, (state, { data }) =>
      adapter.setOne(data, {
        ...state,
        updateRequestState: <Writable<State['updateRequestState']>>(
          RequestState.success
        ),
      })
    ),
    produceOn(failure, (state, { error }) => {
      state.error = <Writable<State['error']>>error;
      state.updateRequestState = <Writable<State['updateRequestState']>>(
        RequestState.failed
      );
    }),
  ];
}
