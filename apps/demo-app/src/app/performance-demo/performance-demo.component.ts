/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-performance-demo',
  templateUrl: './performance-demo.component.html',
  styleUrls: ['./performance-demo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceDemoComponent {
  public items: Array<{ id: number }> = [];

  constructor(private readonly cd: ChangeDetectorRef) {
    this.items = new Array(50).fill('').map((_item, index) => {
      return { id: index };
    });

    // setInterval(() => {
    //   this.addOne();
    //   this.cd.markForCheck();
    // }, 50);
  }

  public trackById(_index: number, item: { id: number }): number {
    return item.id;
  }

  public trackByIndex(index: number): number {
    return index;
  }

  public addOne(): void {
    this.items = [
      { id: Math.ceil(Math.random() * 10000) },
      ...this.items.slice(0, 150),
    ];
  }

  public shuffle(): void {
    this.items.sort(() => Math.random() - 0.5);
  }

  public changeIds(): void {
    this.items
      .filter(() => Math.random() > 0.5)
      .forEach((item) => {
        item.id = item.id + 1;
      });
  }

  public changeIdsCorrect(): void {
    this.items = this.items.map((item) => {
      if (Math.random() > 0.5) {
        return { id: item.id + 1 };
      }
      return item;
    });
  }
}
