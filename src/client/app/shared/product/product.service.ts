import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class ProductService {
    
	_products: Product[] = 
	[
			{
				"id": 1,
				"name": "IPhone 1",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
				"amount":2,
				"category": "mobile phone",
			},
			{
				"id": 2,
				"name": "IPhone 2",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":2,
				"category": "mobile phone",
			},
			{
				"id": 3,
				"name": "IPhone 3",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":3,
				"category": "mobile phone",
			},
								{
				"id": 4,
				"name": "IPhone 4",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":2,
				"category": "mobile phone",
			},
								{
				"id": 5,
				"name": "IPhone 5",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":4,
				"category": "mobile phone",
			},
								{
				"id": 6,
				"name": "IPhone 6",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":5,
				"category": "mobile phone",
			},
								{
				"id": 7,
				"name": "IPhone 7",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":6,
				"category": "mobile phone",
			},
								{
				"id": 8,
				"name": "IPhone 8",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":10,
				"category": "mobile phone",
			},
			{
				"id": 9,
				"name": "IPhone 9",
				"imgUrl": "../assets/iphone.jpg",
				"price": 600,
				"shortDetail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				"detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium",
				"amount":12,
				"category": "mobile phone",
			}
	];
	
	getCategories(): string[] {
        return [
            "Mobile phone",
            "Laptop",
            "Clothes",
            "Toys",
        ];
    }
    
    getProducts(category: string): Product[] {
		return this._products;
	} 
	
	getProduct(idx: number, category:string): Product{
		
		return this._products[idx];
	}
}