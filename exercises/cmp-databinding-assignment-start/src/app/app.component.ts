import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCreatedElement(newElement: number): void {
    if (newElement % 2 === 0) {
      this.evenNumbers.push(newElement);
    } else {
      this.oddNumbers.push(newElement);
    }
  }
}
