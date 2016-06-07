import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';

@Component({
  moduleId: module.id,
  selector: 'ec-mycart',
  templateUrl: 'mycart.component.html',
  styleUrls: ['mycart.component.css']
})
export class MyCartComponent{ 
	
	_cart: Cart;
	constructor(private _cartService: CartService) {
		this._cart = this._cartService.getCart(123456);
	}
  
  
  //This region use for implement the event listener.
  OnClickBuy():void{
	alert("Buy was pressed");
	
	//Need to save to database;
	
	//Clean the current cart;
	this._cartService.buyAllProductsInCart();
  }
  
	OnClickRemove(index:number):void{
		alert("Remove was pressed");
		
		this._cartService.removeOneProductFromCart(index);
	}
  
  //End event listener
}