import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onInactivate(userId: number): void {
    this.usersService.inactivate(userId);
  }
}
