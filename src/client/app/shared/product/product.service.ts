import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class ProductService {
    getCategories(): string[] {
        return [
            "Mobile phone",
            "Laptop",
            "Clothes",
            "Toys",
        ];
    }
    
    getProducts(category: string): Product[] {
        switch (category.toLowerCase()) {
            case "mobile phone":
                return [
                    {
                        "id": 1,
                        "name": "IPhone6",
                        "imgUrl": "",
                        "price": 600,
                        "shortDetail": "Short detail",
                        "detail": "detail",
                        "category": "mobile phone",
                    },
                    {
                        "id": 1,
                        "name": "IPhone6",
                        "imgUrl": "",
                        "price": 600,
                        "shortDetail": "Short detail",
                        "detail": "detail",
                        "category": "mobile phone",
                    },
                ];
            default:
                return null;          
        }
    }
}  