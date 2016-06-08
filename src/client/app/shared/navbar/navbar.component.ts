import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

  constructor(private _auth: AuthenticationService) {
    this._auth.setSignOutSuccessCallback(function() {
      console.log("Sign out success");
    });

    this._auth.setSignOutFailedCallback(function() {
      console.log("Sign out failed");
    })
  }

  onSearch(): void {
    alert("submit");
  }

  onSignIn(): void {
    $("#signin-modal").modal();
  }

  onSignOut(): void {
    this._auth.signOut();
  }

  onSignUp(): void {
    this._auth.signUp("user3@ec.com", "123456789", "090", "123456789");
  }
}