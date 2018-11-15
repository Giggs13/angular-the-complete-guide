import { Component, Input } from '@angular/core';
import { Account } from '../shared/model/account.model';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']/*,
  providers: [LoggingService]*/
})
export class AccountComponent {

  @Input() account: Account;
  @Input() id: number;

  constructor(/*private loggingService: LoggingService, */private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
