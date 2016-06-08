import { Component, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
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
}