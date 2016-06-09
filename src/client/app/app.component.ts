import { Component, OnInit } from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { ProductService, AuthenticationService, CartService,
MyCartComponent,ProductDetailComponent, NavbarComponent, 
SidebarComponent, ProductListComponent ,SigninComponent,
SignupComponent} from './shared/index';

declare var firebase: any; 

@Component({
  moduleId: module.id,
  selector: 'ec-app',
  viewProviders: [HTTP_PROVIDERS, ProductService, AuthenticationService, CartService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,  MyCartComponent,ProductDetailComponent, NavbarComponent, 
  SidebarComponent, SigninComponent,SignupComponent],
  providers: [ROUTER_PROVIDERS]  
})
@Routes([
  	{ path: '/:category/:productId', component: ProductDetailComponent },
    { path: '/:category', component: ProductListComponent },
	
])
export class AppComponent implements OnInit {
	constructor(private _cartService: CartService,
		private _authenticationService: AuthenticationService) {
	}

  ngOnInit() {
        // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC1yLJEU2jbSWSrC_Wr3ptJZZQR0kP1b-4",
      authDomain: "ecommerce-7387f.firebaseapp.com",
      databaseURL: "https://ecommerce-7387f.firebaseio.com",
      storageBucket: "ecommerce-7387f.appspot.com",
    };
    firebase.initializeApp(config);
  }
}