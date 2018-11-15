import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {

  accounts: Account[] = [];
  statusUpdated = new EventEmitter<string>();

  constructor(/*private loggingService: LoggingService*/) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push(new Account(name, status));
    LoggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    LoggingService.logStatusChange(status);
  }
}
