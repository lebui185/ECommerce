import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Product } from '../product/product';

@Injectable()
export class CartService {

	_cart:Cart;
    
    getCart(id: number): Cart {
		
		return this._cart;
	}
	
	addToCart(product: Product): void{
		this._cart.products.push(product);
	}
	
}