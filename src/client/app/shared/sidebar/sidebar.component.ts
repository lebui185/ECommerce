import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from '../product/product.service';
import { ValuesPipe } from '../valuespipe/values.pipe';

@Component({
  moduleId: module.id,
  selector: 'ec-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [ValuesPipe]
})

export class SidebarComponent implements OnInit {
  _title: string = "Category";
  _categories: Object;

  constructor(private _productService: ProductService) {
      
  }

  ngOnInit(): void {
     this._productService.getCategories().then((snapshot: any) => {
       this._categories = snapshot.val();
     });
  }
}