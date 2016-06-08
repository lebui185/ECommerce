import { Component, OnInit} from '@angular/core';

import { SigninComponent } from '../signin/index'
import { MyCartComponent } from '../mycart/index'
import { SignupComponent } from '../signup/index'
import { PaymentComponent } from '../payment/index'
import { ProfileComponent } from '../profile/index'

import { UserService } from '../user/user.service';
import { Cart } from '../cart/cart';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [SigninComponent,SignupComponent,MyCartComponent,PaymentComponent,ProfileComponent]
})
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
}