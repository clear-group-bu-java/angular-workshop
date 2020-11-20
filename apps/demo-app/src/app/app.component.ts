import { PeopleService } from '@alten/apis/people';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'demo-app';

  constructor(private readonly apiService: PeopleService) {
    this.apiService.getPeople().subscribe((people) => {
      console.log(people);
    });

    this.apiService.getPeopleId('436456').subscribe((person) => {
      console.log(person);
    });
  }

  public foo(): string {
    return 'FOOOOOO';
  }
}
