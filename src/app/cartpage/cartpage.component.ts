import { Component, OnInit } from '@angular/core';
import * as jsonData from '../assets/db_data.json';
import { SaveProductService } from '../save-product.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  //template: '',

  styleUrls: ['./cartpage.component.css']
})

export class CartComponent implements OnInit{
  constructor(private saveProductService: SaveProductService, ){}
  data: any = jsonData;
  bookmarkedProducts: any[] = [];
  ngOnInit(){
    this.bookmarkedProducts = this.saveProductService.getCart();
    //this.bookmarkedProducts.push(this.saveProductService.getCart());
  }

  returnCart(): any{
    for(let i = 0; i<this.bookmarkedProducts.length; i++){
      console.log('printing in cart ', this.bookmarkedProducts[i]);
      console.log('cart length:', this.bookmarkedProducts.length);
      
      return this.bookmarkedProducts[i].Name; // array is empty?
    }
    
  }
  


}