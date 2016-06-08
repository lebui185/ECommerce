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
	_email:string="";
	_identifyCard:string="";
	_phone:string="";
	
	_MIN_PASS:number=8;
	_VALIDATE_PHONE=/^\d+$/;
	_VALIDATE_EMAIL=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	constructor(private _userService: UserService) {

	}
  
  
  //this region use for implement the event listener.
  OnClickSignUp():void{
	alert("SignUp was pressed");
	if(this._username.length >0
		&& this._password.length>=this._MIN_PASS
		&& this._email.length> 0 && this._email.match(this._VALIDATE_EMAIL) != null
		&& this._identifyCard.length> 0
		&& this._phone.length >0 && this._phone.match(this._VALIDATE_PHONE) != null){
			
			//Do something here
			//Call userservice to signup the username and password
			
			this._userService.signUp(this._username,this._password,
						this._email,this._identifyCard,this._phone);
	}
  }
  
  //End event listener
}