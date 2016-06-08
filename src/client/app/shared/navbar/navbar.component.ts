<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service'
=======
import { Component, OnInit} from '@angular/core';

import { SigninComponent } from '../signin/index'
import { MyCartComponent } from '../mycart/index'
import { SignupComponent } from '../signup/index'
import { PaymentComponent } from '../payment/index'
import { ProfileComponent } from '../profile/index'

import { UserService } from '../user/user.service';
import { Cart } from '../cart/cart';
import { Router } from '@angular/router'
>>>>>>> c2609f4ff703db5af77738c4039e01a57e53d371

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [SigninComponent,SignupComponent,MyCartComponent,PaymentComponent,ProfileComponent]
})
<<<<<<< HEAD
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
=======
export class NavbarComponent { 
	_userType:number= -1;
	_username:string;
	updatecart:Cart;
	updateUser:User;
	theBoundCallback: Function;
	
	constructor(private _userService: UserService,
				private _parentRouter: Router) {
		this.updatecart = this._userService.getCart();
		this.updateUser = this._userService.getUser();
	}
	
	ngOnInit(){
		this.theBoundCallback = this.theCallback.bind(this);
	}
	
	theCallback(){
		this._userType = this._userService.getUserType();
		this._username = this._userService.getUserNickName();
		this._parentRouter.navigateByUrl("/");
	}
	
	OnClickSignOut(){
		this._userService.signOut();
		this._userType = this._userService.getUserType();
		this._username = this._userService.getUserNickName();
		this._parentRouter.navigateByUrl("/");
	}
	
	OnClickUpdateCart(){
		this.updatecart = this._userService.getCart();
	}
	
	OnClickUpdateUser(){
		this.updateUser = this._userService.getUser();
	}

	onSearch(): void {
		alert("submit");
	}
>>>>>>> c2609f4ff703db5af77738c4039e01a57e53d371
}