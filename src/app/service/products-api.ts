import { Injectable } from '@angular/core';
declare const axios: any;

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  constructor() {
    
  }
  async getApiProduct():Promise<any>{
    try{
      const response = await axios.get('https://68a5ae462a3deed2960e664b.mockapi.io/clh168/products/allProducts');
      return response.data;
    }catch(error){
      console.error('Error fetching API product:', error);
    }finally{
      console.log('Fetch attempt finished');
    }

  }
  
}
