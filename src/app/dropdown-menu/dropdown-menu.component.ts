import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  isOpen: boolean = false;

  toggleDropdown(e: any) {
    e.preventDefault();
    console.log(e)
    this.isOpen = !this.isOpen;
  }
}