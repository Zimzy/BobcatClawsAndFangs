import { Component, OnInit } from '@angular/core';
import * as jsonData from 'src/assets/db_data.json';
import { SaveProductService } from '../save-product.service';
import { ToolbarRouteService } from '../toolbar-route.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})

export class CartComponent implements OnInit{
  constructor(private saveProductService: SaveProductService, private toolbarRouteService: ToolbarRouteService ){}
  data: any = jsonData;
  store: any = this.data.Best_Buy.Name;
  cartProcessed: any[] = [];
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  

  ngOnInit(){
    
    this.cartCleanup();
    
  }

  

onSelectSubCategory(subCat: string){
  this.toolbarRouteService.onSelectSubCategory(subCat);


}

  cartCleanup(){
    
    //Standardized product type
    interface product {

      Name: string;
      Currency_symbol: string;
      Price: number;
      image_URL: string;
      Route: string;
      Seller: string;
      Quantity: number;
    
  }

  

    
    // for(let i = 0; i<this.saveProductService.cart.length; i++){
      
    //   if (this.saveProductService.cart[i].offers){

    //     let item: product = {"Name": this.saveProductService.cart[i].product.title, "Currency_symbol": "$","Price": this.saveProductService.cart[i].offers.primary.price, 
    //       "image_URL": this.saveProductService.cart[i].product.main_image, "Route": "/detailedProducts", "Seller": this.saveProductService.cart[i].offers.primary.seller.name, "Quantity": 1};
    //     this.saveProductService.cart[i] = item;
    //     //console.log('product: ', this.cartProcessed[i].Name);
        

    //   }
    //   else if (this.saveProductService.cart[i].Keywords) {
    //     let item: product = {"Name": this.saveProductService.cart[i].Name, "Currency_symbol": "$","Price": this.saveProductService.cart[i].Price, 
    //       "image_URL": this.saveProductService.cart[i].Img_URL, "Route": "/products", "Seller": this.store, "Quantity": 1};
    //       this.saveProductService.cart[i] = item;
    //   }

    //   else{
    //     console.log('');
    //   }
     
    //   this.cartProcessed = this.saveProductService.cart;
    //  }
    for (let i = 0; i < this.saveProductService.cart.length; i++) {

    if (this.saveProductService.cart[i].offers) {

      let item: product = {
        Name: this.saveProductService.cart[i].product.title,
        Currency_symbol: "$",
        Price: this.saveProductService.cart[i].offers.primary.price,
        image_URL: this.saveProductService.cart[i].product.main_image,
        Route: "/detailedProducts",
        Seller: this.saveProductService.cart[i].offers.primary.seller.name,
        Quantity: 1
      };

      this.saveProductService.cart[i] = item;

    } else if (this.saveProductService.cart[i].Keywords) {

      let item: product = {
        Name: this.saveProductService.cart[i].Name,
        Currency_symbol: "$",
        Price: this.saveProductService.cart[i].Price,
        image_URL: this.saveProductService.cart[i].Img_URL,
        Route: "/products",
        Seller: this.store,
        Quantity: 1
      };

      this.saveProductService.cart[i] = item;

    } else {
      console.log('');
    }
  }

  // 2️⃣ Now merge duplicate products by Name + Price + Route
  // const merged: { [key: string]: product } = {};

  // for (const item of this.saveProductService.cart as product[]) {
  //   const key = item.Name + '|' + item.Price + '|' + item.Route;

  //   if (!merged[key]) {
  //     // first time we see this product
  //     merged[key] = { ...item };
  //   } else {
  //     // same product again → bump Quantity
  //     merged[key].Quantity += item.Quantity ?? 1;
  //   }
  // }

  // // 3️⃣ Save merged array into cartProcessed (and back to service)
  // this.cartProcessed = Object.values(merged);
  // this.saveProductService.cart = this.cartProcessed;

  // }

    // 2️⃣ Merge duplicates, but cap each row at 10 units
  const merged: { [key: string]: product } = {};
  const baseCounts: { [baseKey: string]: number } = {};
  const MAX_QTY_PER_ROW = 10;

  for (const item of this.saveProductService.cart as product[]) {
    // Base identity for the product
    const baseKey = item.Name + '|' + item.Price + '|' + item.Route;

    // Track which "bucket" (row) we are filling for this product
    if (baseCounts[baseKey] == null) {
      baseCounts[baseKey] = 1;
    }

    let bucketIndex = baseCounts[baseKey];
    let key = baseKey + '|' + bucketIndex;

    // Make sure this item has at least Quantity 1
    const incomingQty =
      item.Quantity && item.Quantity > 0 ? item.Quantity : 1;

    // If this bucket doesn't exist yet, create it
    if (!merged[key]) {
      merged[key] = {
        ...item,
        Quantity: Math.min(incomingQty, MAX_QTY_PER_ROW),
      };
    } else if (merged[key].Quantity < MAX_QTY_PER_ROW) {
      // We can still add more quantity to this row
      const spaceLeft = MAX_QTY_PER_ROW - merged[key].Quantity;
      const toAdd = Math.min(spaceLeft, incomingQty);
      merged[key].Quantity += toAdd;
    }

    // If this bucket is now full, future items of this product use a new bucket
    if (merged[key].Quantity >= MAX_QTY_PER_ROW) {
      baseCounts[baseKey] = bucketIndex + 1;
    }
  }

  // 3️⃣ Save merged array into cartProcessed (and back to service)
  this.cartProcessed = Object.values(merged);
  this.saveProductService.cart = this.cartProcessed;
}

  returnCart(): any{
    for(let i = 0; i<this.cartProcessed.length; i++){
      console.log('printing in cart ', this.cartProcessed[i]);
      //console.log('cart length:', this.cartProcessed.length);
      
      return this.cartProcessed[i]; // comment out when testing
    }
    
  }

    onQuantityChange(product: any, newQty: number): void {
  console.log('Quantity changed for', product.Name, 'to', newQty);
  if (!isNaN(newQty) && newQty > 0) {
    product.Quantity = newQty;
  } else {
    product.Quantity = 1;
  }
}

  
  removeFromCart(product: any){
    
    // const index = this.cartProcessed.indexOf(product);
    // this.cartProcessed.splice(index,1);

    const index2 = this.saveProductService.cart.indexOf(product);
    this.saveProductService.cart.splice(index2,1);
    
    //this.cartCleanup();

    
  }
  


  // priceSum():string{
  //   let sum = 0;
  //   for(let i = 0; i<this.cartProcessed.length; i++){
  //     sum+= this.cartProcessed[i].Price;
  // }
  // let sum2=(Math.round(sum * 100) / 100).toFixed(2);
  // return sum2;
  // }
  priceSum(): string {
  let sum = 0;

  for (let i = 0; i < this.cartProcessed.length; i++) {
    const item = this.cartProcessed[i];
    const qty = item.Quantity && item.Quantity > 0 ? item.Quantity : 1; // default to 1
    sum += item.Price * qty;
  }

  const sum2 = (Math.round(sum * 100) / 100).toFixed(2);
  return sum2;
}

 printPage(): void {
    window.print();
  } 
}