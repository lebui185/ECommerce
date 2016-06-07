import { Component, OnInit} from '@angular/core';
import { SigninComponent } from '../signin/index'
import { MyCartComponent } from '../mycart/index'
import { SignupComponent } from '../signup/index'
import { UserService } from '../user/user.service';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [SigninComponent,SignupComponent,MyCartComponent]
})
export class NavbarComponent { 
	_userType:number= -1;
	_username:string;
	theBoundCallback: Function;
	
	constructor(private _userService: UserService,
				private _parentRouter: Router) {

	}
	
	ngOnInit(){
		this.theBoundCallback = this.theCallback.bind(this);
	}
	
	theCallback(){
		this._userType = this._userService.getUserType(123456);
		this._username = this._userService.getUserNickName(123456);
		this._parentRouter.navigateByUrl("/");
	}
	
	OnClickSignOut(){
		this._userService.signOut();
		this._userType = this._userService.getUserType(123456);
		this._username = this._userService.getUserNickName(123456);
		this._parentRouter.navigateByUrl("/");
	}

	onSearch(): void {
		alert("submit");
	}
}