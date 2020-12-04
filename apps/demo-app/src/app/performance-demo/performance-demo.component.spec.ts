import { mock } from '@alten/core';
import { ChangeDetectorRef } from '@angular/core';

import { PerformanceDemoComponent } from './performance-demo.component';

describe('PerformanceDemoComponent', () => {
  const changeDetectorRefMock = mock<ChangeDetectorRef>();

  let component: PerformanceDemoComponent;

  beforeEach(() => {
    component = new PerformanceDemoComponent(changeDetectorRefMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
