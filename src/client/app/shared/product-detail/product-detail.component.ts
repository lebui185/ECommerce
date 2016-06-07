import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnActivate { 
  
  ANYID:number = 15243698; // HardCode
  
  _title: string = "Product";
	_product : Product;
	
	_userType:number =  1;

  constructor(private _productService: ProductService,
				private _cartService: CartService,
				private _userService: UserService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let category = routeSegment.getParam('category');
	let idx = routeSegment.getParam('idx');
    console.log(category);
	console.log(idx);
	this._product = this._productService.getProduct(idx, category);
    this._title = category;
	
	this._userType = this._userService.getUserType(this.ANYID);
    
    console.log(this._product.name);
	console.log(this._product.imgUrl);
  }
}