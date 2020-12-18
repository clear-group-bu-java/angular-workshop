import { PersonDto } from '@alten/apis/people';
import { RoutingFacade } from '@alten/core';
import { PersonFacade } from '@alten/people/data/person';
import { Component } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'Demo App';
  public name!: string;

  public people: Array<PersonDto> = [];
  public people$ = this.facade.collection$;
  public isAllowed$ = this.facade.isAllowed$;
  public isAllowedLocal$ = new Subject<boolean>();
  public readonly isDenied$ = combineLatest([
    this.isAllowed$,
    this.isAllowedLocal$,
  ]).pipe(map(([first, second]) => !(first && second)));

  constructor(
    private readonly facade: PersonFacade,
    private readonly routingFacade: RoutingFacade,
    private readonly personFacade: PersonFacade
  ) {
    let index = 0;

    setInterval(() => {
      index++;
      this.isAllowedLocal$.next(index % 2 === 0);
    }, 2000);

    this.routingFacade.routeParams$.subscribe((params) => {
      console.log('PARAMS', params);
    });

    this.personFacade.peopleWithAddress$.subscribe((data) => {
      console.log(data);
    });
  }
}
