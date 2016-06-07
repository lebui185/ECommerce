import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SignInComponent {
  _header: string = "Sign in";

  constructor() {
      
  }

  onSignIn() {
    let email: string = "lebui195@xabui.com";
    let password: string = "123456789" 
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error: any) {
    // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user auth");
      } else {
         console.log("user unauth");
      }
    })

    // firebase.auth().signOut().then(function() {
    //   console.log("sign out");
    // }, function(error) {
    //   console.log(error);
    // });
  }
}