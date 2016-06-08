import { Component} from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})
export class PaymentComponent{ 

	_address:string ="";
	_paymentCard:string= "";
	
	constructor(private _userService: UserService) {

	}
  
  
  //this region use for implement the event listener.
  OnClickPayment():void{
	alert("Buy was pressed");
	if(this._address.length > 0 && this._paymentCard.length >0){
		this._userService.buyAllProductsInCart(this._address,this._paymentCard);
	}
  }
  
  //End event listener
}