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
        // switch (category.toLowerCase()) {
        //     case "mobile phone":
        //         return [
        //             {
        //                 "id": 1,
        //                 "name": "IPhone6",
        //                 "imgUrl": "",
        //                 "price": 600,
        //                 "category": "mobile phone",
        //             },
        //             {
        //                 "id": 1,
        //                 "name": "IPhone6",
        //                 "imgUrl": "",
        //                 "price": 600,
        //                 "category": "mobile phone",
        //             }
        //         ];
                
        //     default:
        //         return null;     
        // }   
        
                return [
                    {
                        "id": 1,
                        "name": "IPhone6",
                        "imgUrl": "",
                        "price": 600,
                        "category": "mobile phone",
                    },
                    {
                        "id": 1,
                        "name": "IPhone6",
                        "imgUrl": "",
                        "price": 600,
                        "category": "mobile phone",
                    }
                ];    
        } 
    }
}