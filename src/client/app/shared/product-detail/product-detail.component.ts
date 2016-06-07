import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnActivate { 
  _title: string = "Product";
	_product : Product;

  constructor(private _productService: ProductService,
				_cartService: CartService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let category = routeSegment.getParam('category');
	let idx = routeSegment.getParam('idx');
    console.log(category);
	console.log(idx);
	this._product = this._productService.getProduct(idx);
    this._title = this._product.name;
    
    console.log(this._product.name);
  }
}