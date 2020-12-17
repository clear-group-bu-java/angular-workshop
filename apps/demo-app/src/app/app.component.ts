import { PeopleService, PersonDto } from '@alten/apis/people';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'Demo App';
  public name!: string;

  public people: Array<PersonDto> = [];

  constructor(private readonly peopleService: PeopleService) {
    this.peopleService.getPeople().subscribe((people) => {
      this.people = people;
    });
  }
}
