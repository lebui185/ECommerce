import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Product } from '../product/product';

@Injectable()
export class CartService {

	_cart:Cart;
    
    getCart(id: number): Cart {
		if(this._cart === undefined){
			//getcart from database with id user
			var infoCart = {
				  "id": 1,
				  "name": "Current Cart",
				  "products": []
				};
			this._cart = infoCart;
		}
		return this._cart;
	}
	
	addToCart(product: Product): void{
		//console.log(product);
		this._cart.products.push(product);
		//console.log(this._cart.products[0]);
	}
	
	removeOneProductFromCart(index:number):void{
		if(this._cart.products.length > 0 && index >=0)
			this._cart.products.splice(index, 1);
	}
	
	cleanCart():void{
		this._cart.products = [];
	}
	
	buyAllProductsInCart(){
		if(this._cart.products.length > 0){
			//save all products in cart to database;
			
			//Clean your cart;
			this.cleanCart();
		}
		//do nothing.
	}
	
}