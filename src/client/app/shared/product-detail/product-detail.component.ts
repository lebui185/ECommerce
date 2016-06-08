import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnActivate { 
  
	_title: string = "Product";
	_product : Product;
	_amount:number = 1;
	_userType:number =  -1;

  constructor(private _productService: ProductService,
				private _userService: UserService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let category = routeSegment.getParam('category');
	let idx = routeSegment.getParam('idx');
    console.log(category);
	console.log(idx);
	this._product = this._productService.getProduct(parseInt(idx, 10), category);
    this._title = category;
	
	this._userType = this._userService.getUserType();
    
    console.log(this._product.name);
	console.log(this._product.imgUrl);

  }
  
  
  //this region use for implement the event listener.
	OnClickUpdateProduct(): void{
		alert("Update product was pressed");
		console.log("Update product was pressed");
		//Build your bussiness here.
		
		
	}
	
	OnClickRemoveProduct(): void{
		alert("Remove product was pressed");
		console.log("Remove product was pressed");
		//Build your bussiness here.
		
		
	}
	
    OnClickAddProductToCart(): void{
		alert("Add product was pressed");
		console.log("Add product was pressed");
		
		this._userService.addToCart(this._product,this._amount);
		
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
  
  
  
  
  
  //End event listener
}