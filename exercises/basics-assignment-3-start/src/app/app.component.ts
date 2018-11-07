import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayDetails = false;
  logItems = [];

  onToggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logItems.push(`It had clicked at ${ new Date().toLocaleTimeString() }`);
  }

  isDisplayedDetails() {
    return this.displayDetails;
  }
}
