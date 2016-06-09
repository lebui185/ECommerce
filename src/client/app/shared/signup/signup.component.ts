import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CartService } from '../cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ec-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent{ 
	_password:string = "";
	_email:string="";
	_identityNumber:string="";
	_phone:string="";
	
	constructor(private _cartService: CartService,
		private _authenticationService: AuthenticationService) {
		this._authenticationService.setSignUpSuccessCallback(() => {
			$('#signup-modal').modal('hide');
			this._cartService.init();
		});
	}
  
  //this region use for implement the event listener.
  onSubmit():void{
		this._authenticationService.signUp(this._email, this._password, this._phone, this._identityNumber);
  }
  
  //End event listener
}