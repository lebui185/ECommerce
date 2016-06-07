import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
	_user: User;

    getUser(id: number): User {
		return this._user;
	}
	
	getUserType(id: number): number{
		if(this._user === undefined || this._user.userType === undefined){
			return -1;
		}
		return this._user.userType;
	}
	
	getUserNickName(id:number): string{
		if(this._user === undefined || this._user.name === undefined){
			return "You are awesome!!";
		}
		return this._user.name;
	}
	
	signIn(username:string,password:string):void{
		//Do something here;
		
		//Get userIndo from database
		let info = {
		  "id": 7250365124,
		  "name": "Hồ Vũ Anh Khoa",
		  "phone": "0932273448",
		  "address": "TP.HCM",
		  "identifyCard": "0256348244",
		  "userType": 0
		};
		
		//bind userInfo to _user;
		this._user = info;
	}
	
	signOut(){
		// close connection to database
		
		//clean the user.
		this._user = undefined;
	}
	
	signUp(username:string ,password:string){
		//sign up this user on database
		
	}
	
	
}