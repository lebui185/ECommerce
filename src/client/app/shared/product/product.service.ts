import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class ProductService {
	getCategory(id: string): any {
        return firebase.database().ref("/categories/" + id).once("value");
    }

	getCategories(): any {
        return firebase.database().ref("/categories").once("value");
    }
    
	getProduct(id: any): any {	
		return firebase.database().ref("/products/" + id).once("value");
	}
}