import { Cart } from '../cart/cart';

export class User {
  id: number;
  name: string;
  phone: string;
  address: string;
  identifyCard: string;
  email:string;
  userType: number;
  cart: Cart;
}