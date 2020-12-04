import { EntityState } from '@ngrx/entity';

import { RequestState } from './request-state.enum';

export interface CollectionState<T> extends Readonly<EntityState<T>> {
  readonly selectedId: string | undefined;
  readonly error: string | undefined;
  readonly readRequestState: RequestState;
  readonly updateRequestState: RequestState;
}
