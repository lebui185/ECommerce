import { Component,Input,OnInit} from '@angular/core';
import { UserService } from '../user/user.service';
import { User}  from '../user/user';

@Component({
  moduleId: module.id,
  selector: 'ec-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent{ 
	
	@Input() _user:User;
	
	_MIN_PASS:number=8;
	_VALIDATE_PHONE=/^\d+$/;
	_VALIDATE_EMAIL=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	constructor(private _userService: UserService) {
	}
  
  //this region use for implement the event listener.
  
  //End event listener
}