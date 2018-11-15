import { Component } from '@angular/core';
import { CounterService } from './shared/services/counter.service';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

  constructor(private counterService: CounterService) {
  }

  getCountOfActiveActions(): number {
    return this.counterService.countOfActiveActions;
  }

  getCountOfInactiveActions(): number {
    return this.counterService.countOfInactiveActions;
  }
}
