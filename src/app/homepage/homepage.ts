import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CartList } from '../service/cart-list';
import { ProductsApi } from '../service/products-api';

declare const Swal: any;

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, NgFor],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  constructor(private cartList:CartList,private productsApi:ProductsApi) {
  }
  async ngOnInit(){
    this.apiProducts = await this.productsApi.getApiProduct();
  }
  apiProducts: any[] = [];
  products: any[] = [
    {
      id: 10,

      name: "បូមទឹក",
      description: "ម៉ាសុីនខ្លាំងដូចសេះ",
      price: 29.99,
      imageUrl: "https://cdn.radwell.com/productlargeimages/2fe8ec1a8cd345bc9881c073a536824f.jpg"
    },
    {
      id: 20,

      name: "ម៉ាស៊ីនថ្មី",
      description: "ម៉ាសុីនខ្លាំងដូចសេះ",
      price: 39.99,
      imageUrl: "https://www.image-gbh.com/uploads/thumbnail/002453.1_26715_20211207102953.jpg"
    },
    {
      id: 30,

      name: "ប្រេងម៉ាស៊ីន",
      description: "ម៉ាសុីនខ្លាំងដូចសេះ",
      price: 49.99,
      imageUrl: "https://www.kmxhelmets.com/wp-content/uploads/2022/10/Wurth-Oil-10w-40-1L.jpg"
    },
    {
      id: 40,

      name: "ម៉ាស៊ីនអាឈើ",
      description: "ម៉ាសុីនខ្លាំងដូចសេះ",
      price: 59.99,
      imageUrl: "https://storage.emallcambodia.com/products/th/26037_698_0_0f6bbb728f8214092df9781394dcdf22.jpg"
    }
  ];
  count = 0;
  showBtn = false;

  



  // clearAllOrders() {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result: any) => {
  //     if (result.isConfirmed) {
  //       this.showBtn = false;
  //       this.products.forEach(product => {
  //         product.count = 0;
  //       });
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success"
  //       });
  //     }
  //   });
  // }

  onAdd(item: any) {
    // Play sound on button click
    // this.clickSound.play().catch((e) => {
    //   console.error("Failed to play sound:", e);
    // });
    this.cartList.getCart(item);

    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'success',
      title: `បានទិញ ${item.name} `,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
}
