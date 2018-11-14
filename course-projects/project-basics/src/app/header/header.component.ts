import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen = false;
  @Output() selectedMenuItem = new EventEmitter<string>();

  onChooseMenuItem(selectedMenuItem: string) {
    this.selectedMenuItem.emit(selectedMenuItem);
  }

  ngOnInit() {
    this.selectedMenuItem.emit('recipes');
  }
}
