import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SignInComponent {
  _header: string = "Sign in";

  constructor(private _auth: AuthenticationService) {
    this._auth.setSignInSuccessCallback(function() {
      console.log("Sign in success");
    });

    this._auth.setSignInFailedCallback(function() {
      console.log("Sign in failed");
    })
  }

  onSignIn() {
    let email: string = "user1@ec.com";
    let password: string = "123456789";
    this._auth.signInWithEmailAndPassword(email, password);
  }

  onSignInGoogle() {
    this._auth.signInWith("Google");
  }

  onSignInFacebook() {
    this._auth.signInWith("Facebook");
  }
}