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
	constructor(private _userService: UserService) {
	}
  
  //This region use for implement the event listener.
	OnClickRemove(index:number):void{
		alert("Remove was pressed");
		
		this._userService.removeOneProductFromCart(index);
	}
  
  //End event listener
}