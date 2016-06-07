import { Component, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent{ 
	_username:string = "";
	_password:string = "";

	constructor(private _userService: UserService) {

	}
  
  
  //this region use for implement the event listener.
  OnClickSignUp():void{
	alert("SignUp was pressed");
	
	//Do something here
	//Call userservice to signup the username and password
	
	this._userService.signUp(this._username,this._password);
	
  }
  
  //End event listener
}