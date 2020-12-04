import { HttpErrorResponse } from '@angular/common/http';
import { Actions, ofType } from '@ngrx/effects';
import { Action, ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

export const genericApiError = createAction(
  '[API] Generic API Error',
  props<{ error: string }>()
);

export function executeApiRequest<
  P extends Record<string, unknown> = Record<string, unknown>
>(
  actions$: Actions,
  apiCallback: (startAction: TypedAction<string> & P) => Observable<unknown>,
  start: ActionCreator<string>,
  success: ActionCreator<string>,
  failure: ActionCreator<string>
): Observable<Action> {
  return <Observable<Action>>actions$.pipe(
    ofType<TypedAction<string> & P>(start),
    concatMap((action) =>
      apiCallback(action).pipe(
        map((data) => success({ data })),
        catchError((error: HttpErrorResponse) =>
          of(
            failure({ error: error.message }),
            genericApiError({ error: error.message })
          )
        )
      )
    )
  );
}
