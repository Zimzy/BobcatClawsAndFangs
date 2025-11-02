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
    
  }

  

    
    for(let i = 0; i<this.saveProductService.cart.length; i++){
      
      if (this.saveProductService.cart[i].offers){

        let item: product = {"Name": this.saveProductService.cart[i].product.title, "Currency_symbol": "$","Price": this.saveProductService.cart[i].offers.primary.price, 
          "image_URL": this.saveProductService.cart[i].product.main_image, "Route": "/detailedProducts", "Seller": this.saveProductService.cart[i].offers.primary.seller.name};
        this.saveProductService.cart[i] = item;
        //console.log('product: ', this.cartProcessed[i].Name);

      }
      else if (this.saveProductService.cart[i].Keywords) {
        let item: product = {"Name": this.saveProductService.cart[i].Name, "Currency_symbol": "$","Price": this.saveProductService.cart[i].Price, 
          "image_URL": this.saveProductService.cart[i].Img_URL, "Route": "/products", "Seller": this.store};
          this.saveProductService.cart[i] = item;
          
      }

      else{
        console.log('');
      }
     
      this.cartProcessed = this.saveProductService.cart;
     }

  }

  returnCart(): any{
    for(let i = 0; i<this.cartProcessed.length; i++){
      console.log('printing in cart ', this.cartProcessed[i]);
      //console.log('cart length:', this.cartProcessed.length);
      
      return this.cartProcessed[i]; // comment out when testing
    }
    
  }

  

  removeFromCart(product: any){
    
    // const index = this.cartProcessed.indexOf(product);
    // this.cartProcessed.splice(index,1);

    const index2 = this.saveProductService.cart.indexOf(product);
    this.saveProductService.cart.splice(index2,1);
    
    //this.cartCleanup();

    
  }
  


  priceSum():string{
    let sum = 0;
    for(let i = 0; i<this.cartProcessed.length; i++){
      sum+= this.cartProcessed[i].Price;
  }
  let sum2=(Math.round(sum * 100) / 100).toFixed(2);
  return sum2;
  }
}