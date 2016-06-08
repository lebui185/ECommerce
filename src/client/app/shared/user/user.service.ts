import { Injectable } from '@angular/core';
import { User } from './user';
import { Cart } from '../cart/cart';
import { Product } from '../product/product';

@Injectable()
export class UserService {
	_user: User;

    getUser(): User {
		if(this._user === undefined)
			return {
		  "id": 0,
		  "name": "",
		  "phone": "",
		  "email":"",
		  "address": "",
		  "identifyCard": "",
		  "userType": -1,
		  "cart": {
				"products":[]
		  }
		};

		return this._user;
	}
	
	getUserType(): number{
		if(this._user === undefined || this._user.userType === undefined){
			return -1;
		}
		return this._user.userType;
	}
	
	getUserNickName(): string{
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
		  "phone": "0932275448",
		  "email":"hovuanhkhoa@gmail.com",
		  "address": "TP.HCM",
		  "identifyCard": "0256348244",
		  "userType": 0,
		  "cart": {
				"products":[]
		  }
		};
		
		//bind userInfo to _user;
		this._user = info;
	}
	
	signOut(){
		// close connection to database
		
		//clean the user.
		this._user = undefined;
	}
	
	signUp(username:string ,password:string,email:string,identifyCard:string,phone:string){
		//sign up this user on database
		
	}
	
	getCart(): Cart {
		if( this._user != undefined &&this._user.cart === undefined)
			console.log("user" + this._user);
		if(this._user === undefined || this._user.cart === undefined)
			return {"products": []};
		return this._user.cart;
	}
	
	addToCart(product: Product,amount:number): void{
		//console.log(product);
		product.amount = amount;
		this._user.cart.products.push(product);
		//console.log(this._user.cart.products[0]);
	}
	
	removeOneProductFromCart(index:number):void{
		if(this._user.cart.products.length > 0 && index >=0)
			this._user.cart.products.splice(index, 1);
	}
	
	cleanCart():void{
		this._user.cart.products = [];
	}
	
	buyAllProductsInCart(address:string,paymentCard:string){
		if(this._user.cart.products.length > 0){
			//save all products in cart to database;
			
			//Clean your cart;
			this.cleanCart();
		}
		//do nothing.
	}
	
	
}