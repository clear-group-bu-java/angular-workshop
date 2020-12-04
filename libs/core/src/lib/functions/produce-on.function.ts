import { ActionCreator, ActionType, On, on } from '@ngrx/store';
import produce from 'immer';

export interface ImmerReducer<S, C extends ActionCreator> {
  (state: Writable<S>, action: ActionType<C>): void;
}

export declare type Writable<T> = {
  -readonly [K in keyof T]: Writable<T[K]>;
};

export function produceOn<S, C extends ActionCreator>(
  creator: C,
  reducer: ImmerReducer<S, C>
): On<S> {
  const mutableReducer = (state: S, action: ActionType<C>) => {
    return produce(state, (draftState: Writable<S>) => {
      const result: unknown = reducer(draftState, action);

      if (result) {
        throw new Error(
          'Reducers created with produceOn must NOT return a value!'
        );
      }
    });
  };

  return on(creator, mutableReducer);
}
