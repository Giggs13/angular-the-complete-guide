import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/services/accounts.service';
import { Account } from './shared/model/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountsService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
