import { Component } from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { ProductService, NavbarComponent, SidebarComponent, ProductListComponent, SignInComponent} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'ec-app',
  viewProviders: [HTTP_PROVIDERS, ProductService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent, SignInComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
    { path: '/:category', component: ProductListComponent },
])
export class AppComponent {}