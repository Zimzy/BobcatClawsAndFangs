import { Component, OnInit } from '@angular/core';
import { SaveProductService } from '../save-product.service';
@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {
    product: any;
    searchResults = this.saveProductService.getCat();
    similarProducts: any[] = [];
    constructor(private saveProductService: SaveProductService){}
    ngOnInit() {
        this.product = this.saveProductService.getProduct();
        this.similarProducts = this.getSimilarProducts()
    }

    //TODO: Expand product details and functions to grab details.
    // Price per ounce/pound? We could write a separate script to calculate this from the given price itself,
    // if the vendor does not have this information readily available 


    printProduct(): any{
      console.log('printing',this.product.Name)
      return this.product.Name
    }
    inStock(){
      console.log(this.product.inventory.in_stock)
      if(this.product.inventory.in_stock){return "YES"}
      else{return "NO"}
    }
    getProductLink(){
      console.log(this.product.URL)
    }
    getSimilarProducts() {
      // Filter similar products based on price
      const similarPrice = this.product.Price;
      return this.similarProducts = this.searchResults.filter((searchResults: any) => {
          return Math.abs(searchResults.Price - similarPrice) <= 50; // Adjust the price range as needed
      });
      console.log('similar products:', this.similarProducts)
  }
}
