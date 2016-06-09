import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ValuesPipe } from '../valuespipe/values.pipe';

@Component({
  moduleId: module.id,
  selector: 'ec-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [ValuesPipe]
})
export class ProductListComponent implements OnActivate { 
  _products: any[];
  _category: any;

  constructor(private _productService: ProductService,
        private _cartService: CartService,
				private _authenticationService: AuthenticationService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let categoryId = routeSegment.getParam('category');
    this._productService.getCategory(categoryId).then((snapshot: any) => {
      this._category = snapshot.val();
      this._category["id"] = categoryId;
      this.getProductsByCategory(this._category);
    });

  }

  getProductsByCategory(category: any): void {
    let productsObj = category["productsIds"];
    if (productsObj != undefined) {
        let productIds = Object.keys(productsObj);
        this._products = [];
        productIds.forEach(element => {
          
          this._productService.getProduct(element).then((snapshot: any) => {
            let product = snapshot.val();
            product["id"] = element;
            this._products.push(product);
          });
        });
    }
  }
  
  onAddToCartClick(productId: string): void{
    this._cartService.add(productId, 1);
  }
}