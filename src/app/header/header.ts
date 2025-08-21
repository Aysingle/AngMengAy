import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartList } from '../service/cart-list';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private cartListService:CartList) {
    this.cardList=this.cartListService.cartList;
  }
 ngOnDestroy() {
    this.cardList = this.cartListService.cartList;
  }

  isMenuOpen = false;

// display.component.ts
cardList: any[] = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
