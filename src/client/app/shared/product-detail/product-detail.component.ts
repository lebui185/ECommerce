import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { ProductService } from '../product/product.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { CartService } from '../cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnActivate { 
	_product : any = null;
	_amount:number = 1;
	_userType:number =  -1;

	constructor(private _productService: ProductService,
        private _cartService: CartService,
				private _authenticationService: AuthenticationService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
		let productId = routeSegment.getParam('productId');
		this._productService.getProduct(productId).then((snapshot: any) => {
			this._product = snapshot.val();
			this._product["id"] = productId;
		});

  }
  
  onAddToCartClick(productId: string): void{
		console.log(productId);
    this._cartService.add(productId, 1);
  }
}