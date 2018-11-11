import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  incrementedNumber = 0;
  @Output() incrementNumber = new EventEmitter<number>();
  intervalRef: number;

  onGameStart() {
    this.intervalRef = setInterval(() => this.incrementNumber.emit(++this.incrementedNumber), 1000);
  }

  onGameEnd() {
    clearInterval(this.intervalRef);
  }
}
