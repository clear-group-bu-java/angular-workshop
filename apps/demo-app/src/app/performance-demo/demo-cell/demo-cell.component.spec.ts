import { mock } from '@alten/core';
import { ElementRef, NgZone } from '@angular/core';

import { DemoCellComponent } from './demo-cell.component';

describe('DemoCellComponent', () => {
  const elementRefMock = mock<ElementRef>();
  const ngZoneMock = mock<NgZone>();
  let component: DemoCellComponent;

  beforeEach(() => {
    component = new DemoCellComponent(elementRefMock, ngZoneMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
