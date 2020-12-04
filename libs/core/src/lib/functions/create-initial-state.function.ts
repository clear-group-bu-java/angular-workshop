import { createEntityAdapter } from '@ngrx/entity';

import { CollectionState, RequestState } from '../models';

export function getInitialState<T>(): CollectionState<T> {
  const adapter = createEntityAdapter<T>();

  return adapter.getInitialState({
    selectedId: undefined,
    error: undefined,
    readRequestState: RequestState.initial,
    updateRequestState: RequestState.initial,
  });
}
