<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service'
=======
import { Component, Input } from '@angular/core';
import { UserService } from '../user/user.service';
>>>>>>> c2609f4ff703db5af77738c4039e01a57e53d371

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['signin.component.css']
})
export class SigninComponent{ 
	_username:string = "";
	_password:string = "";
	_MIN_PASS:number = 8;
	
	
	@Input() callback: Function; 
	
	constructor(private _userService: UserService) {

	}
  
  
  //this region use for implement the event listener.
  OnClickSignIn():void{
	alert("Signin was pressed");
	
	if(this._username.length > 0
		&& this._password.length >= this._MIN_PASS){
	
		//Do something here
		//Call userservice to signin the username and password
		this._userService.signIn(this._username,this._password);
		
		//callback the navbar
		this.callback();
	}
  }
  
  //End event listener
>>>>>>> c2609f4ff703db5af77738c4039e01a57e53d371
}