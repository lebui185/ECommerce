import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from '../product/product.service';

@Component({
  moduleId: module.id,
  selector: 'ec-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent implements OnInit {
  _title: string = "Category";
  _categories: string[];
  
  constructor(private _productService: ProductService) {
      
  }

  ngOnInit(): void {
     this._categories = this._productService.getCategories();
  }
}