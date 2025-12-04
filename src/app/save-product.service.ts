import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveProductService {
  productValue: any = null;
  productCategory: any = null;
  keyword: any = null;
  cart: any[] = [];
  compareList: any[] = [];

  constructor() {
    //  Restore cart
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        this.cart = JSON.parse(storedCart);
      } catch {
        this.cart = [];
      }
    }

    //  Restore compareList
    const storedCompare = localStorage.getItem('compareList');
    if (storedCompare) {
      this.compareList = JSON.parse(storedCompare);
    }

    //  Restore last selected product
    const storedProduct = localStorage.getItem('currentProduct');
    if (storedProduct) {
      try {
        this.productValue = JSON.parse(storedProduct);
      } catch {
        this.productValue = null;
      }
    }

    //  Restore category results
    const storedCategory = localStorage.getItem('categoryProducts');
    if (storedCategory) {
      try {
        this.productCategory = JSON.parse(storedCategory);
      } catch {
        this.productCategory = null;
      }
    }

    //  Restore keyword
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

    // Build a unique key for a product based on Name + Price + Route
  private buildCompareKey(product: any): string {
    if (!product) return '';

    return (
      (product.Name || product.product?.title || '') +
      '|' +
      (product.Price || product.offers?.primary?.price || '') +
      '|' +
      (product.Route || '')
    );
  }

    //  Add a product to the compare list (avoid duplicates by Name + Price + Route if present)
    // 🔹 Add a product to the compare list (avoid duplicates, max 5 items)
  addToCompare(product: any): { success: boolean; reason?: string } {
    if (!product) {
      return { success: false, reason: 'invalid' };
    }

    const key = this.buildCompareKey(product);

    // Already in compare list? -> do nothing, but not an error
    const exists = this.compareList.some((p: any) => {
      return this.buildCompareKey(p) === key;
    });

    if (exists) {
      return { success: true, reason: 'exists' };
    }

    // Enforce max 5
    if (this.compareList.length >= 5) {
      return { success: false, reason: 'max' };
    }

    this.compareList.push(product);
    localStorage.setItem('compareList', JSON.stringify(this.compareList));

    return { success: true };
  }

    //  Get the compare list
  getCompareList() {
    return this.compareList;
  }

  // 🔹 Check if a product is already in the compare list
  isInCompare(product: any): boolean {
    if (!product) return false;

    const key = this.buildCompareKey(product);

    return this.compareList.some((p: any) => {
      return this.buildCompareKey(p) === key;
    });
  }

  // 🔹 Remove a product from compare list
  removeFromCompare(product: any) {
    if (!product) return;

    const keyToRemove = this.buildCompareKey(product);

    this.compareList = this.compareList.filter((p: any) => {
      return this.buildCompareKey(p) !== keyToRemove;
    });

    localStorage.setItem('compareList', JSON.stringify(this.compareList));
  }

  //  Clear compare list
  clearCompare() {
    this.compareList = [];
    localStorage.setItem('compareList', JSON.stringify(this.compareList));
  }
}