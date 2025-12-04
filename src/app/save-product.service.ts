// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class SaveProductService {
//    productValue: any = null;
//    productCategory: any = null;
//    keyword: any = null;
//    cart: any[] = [];
   
//    // saves clicked on product for detailed product page functionality 
//    saveProductService(value: any){
//     this.productValue = value;
//    }


//    saveCart(){
//     this.cart.push(this.productValue);
//    }

//    getCart(){
//     return this.cart;
//    }

//    //saves keyword to display on categories page
//    saveKeyword(value: any){
//     this.keyword = value;
//    }
//    getKeyword(){
//     return this.keyword;
//    }
//    //saves JSON of category for categories page
//    saveCatService(value: any){
//     this.productCategory = value;
//     //console.log('cat',this.productCategory)
//    }
//    getCat(){
//     console.log("Cat:",this.productCategory);
//     return this.productCategory;
//    }
//    getProduct(){
//     //console.log('value', this.productValue)
//     return this.productValue;
//    }

   
//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveProductService {
  productValue: any = null;
  productCategory: any = null;
  keyword: any = null;
  cart: any[] = [];

  constructor() {
    // 🔹 Restore cart
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        this.cart = JSON.parse(storedCart);
      } catch {
        this.cart = [];
      }
    }

    // 🔹 Restore last selected product
    const storedProduct = localStorage.getItem('currentProduct');
    if (storedProduct) {
      try {
        this.productValue = JSON.parse(storedProduct);
      } catch {
        this.productValue = null;
      }
    }

    // 🔹 Restore category results
    const storedCategory = localStorage.getItem('categoryProducts');
    if (storedCategory) {
      try {
        this.productCategory = JSON.parse(storedCategory);
      } catch {
        this.productCategory = null;
      }
    }

    // 🔹 Restore keyword
    const storedKeyword = localStorage.getItem('keyword');
    if (storedKeyword) {
      this.keyword = storedKeyword;
    }
  }

  // saves clicked on product for detailed product page functionality 
  saveProductService(value: any) {
    this.productValue = value;
    localStorage.setItem('currentProduct', JSON.stringify(value));
  }

  saveCart() {
    if (!this.productValue) {
      return;
    }
    this.cart.push(this.productValue);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  // saves keyword to display on categories page
  saveKeyword(value: any) {
    this.keyword = value;
    localStorage.setItem('keyword', value);
  }

  getKeyword() {
    return this.keyword;
  }

  // saves JSON of category for categories page
  saveCatService(value: any) {
    this.productCategory = value;
    localStorage.setItem('categoryProducts', JSON.stringify(value));
    //console.log('cat',this.productCategory)
  }

  getCat() {
    console.log('Cat:', this.productCategory);
    return this.productCategory;
  }

  getProduct() {
    //console.log('value', this.productValue)
    return this.productValue;
  }
}

