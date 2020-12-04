import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { DemoCellComponent } from './demo-cell/demo-cell.component';
import { PerformanceDemoComponent } from './performance-demo.component';

@NgModule({
  declarations: [PerformanceDemoComponent, DemoCellComponent],
  imports: [CommonModule, MatButtonModule],
})
export class PerformanceDemoModule {}
