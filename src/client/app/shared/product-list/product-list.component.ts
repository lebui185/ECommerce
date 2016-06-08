import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class ProductListComponent implements OnActivate { 
  _title: string = "Product List";
  _products: Product[];
  _userType:number =  -1;

  constructor(private _productService: ProductService,
				private _userService: UserService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let category = routeSegment.getParam('category');
    console.log(category);
    this._title = category;
	
    this._products = this._productService.getProducts(category);
	this._userType = this._userService.getUserType();
    console.log("userType: " + this._userType);
    console.log(this._products[0].name);
  }
  
  OnClickAddProductToCart(product:Product): void{
		alert("Add product was pressed");
		console.log("Add product was pressed");
		console.log(product)
		
		this._userService.addToCart(product,1);
		
		//TestDev
		
		let Test = this._userService.getCart();
		console.log("Product in Cart");
		console.log("Length is " + Test.products.length);
		for(let i = 0; i<Test.products.length; i++){
			console.log("Product in " + i);
			console.log(Test.products[i]);
		}
		console.log("End Product in Cart");
		//TestDev
  }
}