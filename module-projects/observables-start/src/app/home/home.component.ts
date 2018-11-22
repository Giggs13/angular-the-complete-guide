import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscriptions: Subscription;
  customObsSubscriptions: Subscription;

  constructor() {
  }

  ngOnInit() {
    const numbers = interval(1000).pipe(map(value => value * 3));
    const takeFourNumbers = numbers.pipe(take(100));
    this.numbersObsSubscriptions = takeFourNumbers.subscribe(x => console.log('Next: ', x));

    const observable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error(Error('any error'));
      }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });

    this.customObsSubscriptions = observable.subscribe((value: string) => console.log(value),
      (error: Error) => console.log(error.message),
      () => console.log('completed!')
    );
  }

  ngOnDestroy(): void {
    this.numbersObsSubscriptions.unsubscribe();
    this.customObsSubscriptions.unsubscribe();
  }
}
