import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartList {
  constructor(){
    // Load existing cart items from localStorage

    this.cartList = JSON.parse(localStorage.getItem('cartList') || '[]');
  }
  cartList:any[]=[];
  getCart(item:any){
    let find = this.cartList.find(cartItem => cartItem.id === item.id);
    if (find) {
      find.qty += 1;
    } else {
      item.qty = 1;
      this.cartList.push(item);
    }
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }
  getCartList(){
    this.cartList = JSON.parse(localStorage.getItem('cartList') || '[]');
    return this.cartList;
  }
  onDelete(item:any){
    this.cartList = this.cartList.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }
}
 