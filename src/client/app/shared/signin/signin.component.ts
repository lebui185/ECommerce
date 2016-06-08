import { Component, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent{ 
	_email:string = "";
	_password:string = "";
	
	_MIN_PASS:number = 8;
	_VALIDATE_EMAIL=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	
	@Input() callback: Function; 
	
	constructor(private _userService: UserService) {

	}
  
  
  //this region use for implement the event listener.
  OnClickSignIn():void{
	alert("Signin was pressed");
	
	if(this._email.length > 0 && this._email.match(this._VALIDATE_EMAIL) != null
		&& this._password.length >= this._MIN_PASS){
	
		//Do something here
		//Call userservice to signin the username and password
		this._userService.signIn(this._email,this._password);
		
		//callback the navbar
		this.callback();
	}
  }
  
  //End event listener
}