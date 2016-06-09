import { Component, OnInit} from '@angular/core';
import { SigninComponent } from '../signin/index';
import { MyCartComponent } from '../mycart/index';
import { SignupComponent } from '../signup/index';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'ec-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [SigninComponent,SignupComponent,MyCartComponent]
})
export class NavbarComponent { 	
	constructor(private _authenticationService: AuthenticationService,
				private _parentRouter: Router) {
		;
	}
	
	ngOnInit(){
		
	}
	
	onSignInClick(): void {
		$("#signin-modal").modal();
	}

	onUserClick() : void {

	}

	onCartClick(): void {
		$("#cart-modal").modal();
	}

	onSignUpClick(): void {
		$("#signup-modal").modal();
	}

	onSignOutClick(): void {
		this._authenticationService.signOut();
	}
}