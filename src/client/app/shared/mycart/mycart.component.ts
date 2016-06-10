import { Component,Input, OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ValuesPipe } from '../valuespipe/values.pipe';
import { CartService } from '../cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ec-mycart',
  templateUrl: 'mycart.component.html',
  styleUrls: ['mycart.component.css'],
	pipes: [ValuesPipe]
})
export class MyCartComponent implements OnInit{ 
	
	constructor(private _cartService: CartService,
		private _authenticationService: AuthenticationService) {
	}
  
	ngOnInit(): void {
		if (this._authenticationService.isSignIn()) {
			this._cartService.init();
		}
	}

	onRemoveClick(id: string): void {
		this._cartService.removeItem(id);
	}

	onQuantityChange(value: any, id: string):void{
		this._cartService.setQuantity(id, value);
	}

	calculateTotal() {
		let total: number = 0;
		this._cartService.getItems().forEach(item => {
			total += (+item.price) * (+item.quantity);
		});

		return total;
	}
}