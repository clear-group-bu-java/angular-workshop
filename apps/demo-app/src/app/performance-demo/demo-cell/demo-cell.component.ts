/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-demo-cell',
  templateUrl: './demo-cell.component.html',
  styleUrls: ['./demo-cell.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCellComponent {
  @Input() public item?: { id: number };

  private counter = 0;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly zone: NgZone
  ) {}

  public notify(): void {
    console.log(`Item ${this.item?.id} was clicked!`);
  }

  public flash(): void {
    this.el.nativeElement.querySelector('div')?.classList.add('touched');

    this.counter++;
    console.log(`ID ${this.item?.id}: call ${this.counter}`);

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.querySelector('div')?.classList.remove('touched');
      }, 500);
    });
  }

  public mouseenter(): void {
    this.el.nativeElement.querySelector('div')?.classList.add('touched');
  }

  public mouseleave(): void {
    this.el.nativeElement.querySelector('div')?.classList.remove('touched');
  }
}
