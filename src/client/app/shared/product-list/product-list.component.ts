import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  moduleId: module.id,
  selector: 'ec-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnActivate { 
  _title: string = "Product List";
  _products: Product[];


  constructor(private _productService: ProductService) {

  }
  
  routerOnActivate(routeSegment: RouteSegment): void {
    let category = routeSegment.getParam('category');
    console.log(category);
    this._title = category;
    this._products = this._productService.getProducts(category);
  }
}