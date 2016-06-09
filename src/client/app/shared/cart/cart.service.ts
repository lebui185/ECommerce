import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ProductService } from '../product/product.service';

declare var firebase: any;

@Injectable()
export class CartService {

	_items: any[] = [];

	constructor(private _productService: ProductService,
		private _authenticationService: AuthenticationService) {
	}

	init() {
		this._items = [];
		let uid = this._authenticationService.getUserId();
		firebase.database().ref("users/" + uid + "/cart").once('value', (snapshot: any) => {
			var cartItems = snapshot.val();
			if (cartItems != null) {
				let productIds = Object.keys(cartItems);
				productIds.forEach(id => {
					this._productService.getProduct(id).then((snapshot: any) => {
						let product = snapshot.val();
						product["id"] = id;
						product["quantity"] = cartItems[id]["quantity"];
						this._items.push(product);
					})
				});
			} 		
		});
	}

    getItems(): any {
		return this._items;
	}

	removeItem(id: string): void {
		let uid = this._authenticationService.getUserId();
		firebase.database().ref("users/" + uid + "/cart/" + id).remove();

		this._items.forEach((item, index) => {
			if (item.id == id) {
				this._items.splice(index, 1);
				console.log(this._items);
			}
		});
	}
	
	add(productId: string, quant: number): void{
		let uid = this._authenticationService.getUserId();
		firebase.database().ref("users/" + uid)
						.child("cart")
						.child(productId).set({
							quantity: quant
						});
		this._productService.getProduct(productId).then((snapshot: any) => {
						let product = snapshot.val();
						product["id"] = productId;
						product["quantity"] = quant;
						this._items.push(product);
					})
	}

	setQuantity(productId: string, quant: number): void{
		let uid = this._authenticationService.getUserId();
		firebase.database().ref("users/" + uid)
						.child("cart")
						.child(productId).set({
							quantity: quant
						});
	}
	
	
	cleanCart():void{
		this._items.products = [];
	}
	
	buyAllProductsInCart(){
		if(this._items.products.length > 0){
			//save all products in cart to database;
			
			//Clean your cart;
			this.cleanCart();
		}
		//do nothing.
	}
	
}