import { Component } from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { CartService,ProductService,ProductDetailComponent, NavbarComponent, SidebarComponent, ProductListComponent} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'ec-app',
  viewProviders: [HTTP_PROVIDERS, CartService, ProductService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,ProductDetailComponent, NavbarComponent, SidebarComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
	{ path: '/:category/:idx', component: ProductDetailComponent },
    { path: '/:category', component: ProductListComponent },
	
])
export class AppComponent {}