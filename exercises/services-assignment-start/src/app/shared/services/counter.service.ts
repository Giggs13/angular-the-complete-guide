import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _countOfActiveActions = 0;
  private _countOfInactiveActions = 0;

  get countOfActiveActions(): number {
    return this._countOfActiveActions;
  }

  get countOfInactiveActions(): number {
    return this._countOfInactiveActions;
  }

  incremenActiveActions() {
    this._countOfActiveActions++;
  }

  incremenInactiveActions() {
    this._countOfInactiveActions++;
  }
}
