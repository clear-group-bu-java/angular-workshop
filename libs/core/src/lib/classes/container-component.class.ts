import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export abstract class ContainerComponent implements OnDestroy {
  protected onDestroy$: Subject<undefined> = new Subject();

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  public subscribeTo<T>(
    obs$: Observable<T>,
    callback: (data: T) => void
  ): void {
    obs$.pipe(takeUntil(this.onDestroy$)).subscribe((data) => {
      callback.call(this, data);
    });
  }
}
