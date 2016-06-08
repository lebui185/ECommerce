import { Component,Input} from '@angular/core';
import { UserService } from '../user/user.service';
import { Cart } from '../cart/cart';


@Component({
  moduleId: module.id,
  selector: 'ec-mycart',
  templateUrl: 'mycart.component.html',
  styleUrls: ['mycart.component.css'],
})
export class MyCartComponent{ 
	
	@Input()
	_cart: Cart;
	
	@Input()
	_totalPrice: number;
	
	constructor(private _userService: UserService) {
	}
  
  //This region use for implement the event listener.
	OnClickRemove(index:number):void{
		alert("Remove was pressed");
		
		this._userService.removeOneProductFromCart(index);
	}
	onChangeAnmout():void{
		this._totalPrice = 0;
		for(let i =0;i<this._cart.products.length;i++){
			this._totalPrice += this._cart.products[i].price * this._cart.products[i].amount;
		}
	}
  
  //End event listener
}