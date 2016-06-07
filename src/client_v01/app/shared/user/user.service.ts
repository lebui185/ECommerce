import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

	_user: User = 
	{
		  "id": 7250365124;
		  "name": "Hồ Vũ Anh Khoa";
		  "phone": "0932273448";
		  "address": "TP.HCM";
		  "identifyCard": "0256348244";
		  "userType": 0;
	};
    
    getUser(id: number): User {
		//this.user = getFromDatabase():
		return this._user;
	}
	
	getUserType(id: number): number{
		return this._user.userType;
	}
	
	
}