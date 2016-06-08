import { Component } from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { UserService,ProductService, 
MyCartComponent,ProductDetailComponent, NavbarComponent, 
SidebarComponent, ProductListComponent ,SigninComponent,
SignupComponent, PaymentComponent,ProfileComponent} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'ec-app',

  viewProviders: [HTTP_PROVIDERS,UserService, ProductService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,MyCartComponent,ProductDetailComponent, NavbarComponent, 
  SidebarComponent, SigninComponent,SignupComponent,PaymentComponent,ProfileComponent],

  providers: [ROUTER_PROVIDERS]
})
@Routes([
	{ path: '/:category/:idx', component: ProductDetailComponent },
    { path: '/:category', component: ProductListComponent },
	
])
export class AppComponent {}