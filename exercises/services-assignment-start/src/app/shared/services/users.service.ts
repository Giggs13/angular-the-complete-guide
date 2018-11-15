import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  activate(userId: number) {
    this.activeUsers.push(this.inactiveUsers[userId]);
    this.inactiveUsers.splice(userId, 1);
    this.counterService.incremenActiveActions();
  }

  inactivate(userId: number) {
    this.inactiveUsers.push(this.activeUsers[userId]);
    this.activeUsers.splice(userId, 1);
    this.counterService.incremenInactiveActions();
  }
}
