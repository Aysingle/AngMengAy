import { Component} from '@angular/core';
import { CartList } from '../service/cart-list';
import { CurrencyPipe } from '@angular/common';
import { jsDocComment } from '@angular/compiler';



@Component({
  selector: 'app-card-added',
  imports: [CurrencyPipe],
  templateUrl: './card-added.html',
  styleUrl: './card-added.css'
})
export class CardAdded {
constructor(private cartListService:CartList){
  this.cartList = this.cartListService.cartList;
  this.handleTotalAmount();
}
totalAmount: number = 0;
total:number=0
cartList: any[] = [];


handleDelete(cartId: number) {
   const index = this.cartList.findIndex((item) => item.id === cartId);
    if (index !== -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    }
    this.handleTotalAmount();
}
handleQty(cartId: number, event: Event) {
  const input = event.target as HTMLInputElement;
  const newQty = parseInt(input.value);
  const cartItem = this.cartList.find(item => item.id === cartId);
  if (newQty < 1) {
    input.value = '1';
    cartItem.qty = 1 // Reset to 1 if less than 1
  }else{
    cartItem.qty = newQty; // Update the quantity
  }
  this.handleTotalAmount();
  
  localStorage.setItem('cartList', JSON.stringify(this.cartList));
   
}

handleTotalAmount(){
  this.totalAmount = this.cartList.reduce((total, item) => total + item.price * item.qty, 0);
}
}