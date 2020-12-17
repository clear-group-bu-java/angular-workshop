import { PeopleService } from '@alten/apis/people';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'Demo App';
  public name!: string;

  constructor(private readonly peopleService: PeopleService) {
    this.peopleService.getPeople().subscribe((people) => {
      console.log(people);
    });
  }
}
