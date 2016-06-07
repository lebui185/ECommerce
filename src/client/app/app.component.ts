import { Component } from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { UserService,CartService,ProductService, 
MyCartComponent,ProductDetailComponent, NavbarComponent, SidebarComponent, ProductListComponent ,SigninComponent,SignupComponent} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'ec-app',
  viewProviders: [HTTP_PROVIDERS, CartService,UserService, ProductService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,MyCartComponent,ProductDetailComponent, NavbarComponent, SidebarComponent, SigninComponent,SignupComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
	{ path: '/:category/:idx', component: ProductDetailComponent },
    { path: '/:category', component: ProductListComponent },
	
])
export class AppComponent {}