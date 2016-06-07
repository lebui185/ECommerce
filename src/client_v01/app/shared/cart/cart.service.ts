import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Product } from '../product/product';

@Injectable()
export class CartService {

	_cart:Cart = {
	  "id": 1,
	  "name": "Current Cart",
	  "products":[]
	};
    
    getCart(id: number): Cart {
		
		return this._cart;
	}
	
	addToCart(product: Product): void{
		//console.log(product);
		this._cart.products.push(product);
		//console.log(this._cart.products[0]);
	}
	
}