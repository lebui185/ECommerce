import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent { 
  onSearch(): void {
    alert("submit");
  }
}