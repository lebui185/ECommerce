import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CartService } from '../cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ec-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit { 

	_email: string;
	_password: string;
	_showError: number;

	constructor(private _cartService: CartService,
		private _authenticationService: AuthenticationService) {
		
	}

	ngOnInit(): void {
		this._showError = 0;

		this._authenticationService.setSignInSuccessCallback(
			() => {
				$('#signin-modal').modal('hide');
				this._cartService.init();
			}
		)

		this._authenticationService.setSignInFailedCallback(
			(error: any) => {
				this._showError = 1;
			}
		)
	}

	onSubmit(): void {
		this._authenticationService.signInWithEmailAndPassword(this._email, this._password);
	}

	onGoogleSignInClick(): void {
		this._authenticationService.signInWith("google");
	}

	onFacebookSignInClick(): void {
		this._authenticationService.signInWith("facebook");
	}
}

