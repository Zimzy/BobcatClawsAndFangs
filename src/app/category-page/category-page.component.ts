import { Component } from '@angular/core';
import { SaveProductService } from '../save-product.service';
import * as jsonData from '../assets/db_data.json'
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  constructor(private saveProductService: SaveProductService, ){}
  searchResults = this.saveProductService.getCat()
  data: any = jsonData;
  filteredProducts: any[] = [];
  priceRange: number = 300;
  startValue: number = 300;
  endValue: number = 400;
  typeProduct: any = this.saveProductService.getKeyword();
  //seller: any = this.searchResults.offers.primary.seller.name;
  saveProduct(value: any){
    console.log("data is:", this.searchResults)
    console.log('saving ');
    console.log(value);
    this.saveProductService.saveProductService(value);
  }
  filterProducts() {
    this.filteredProducts = this.searchResults.filter((data: { offers: { primary: { price: any; }; }; }) => {
      const price = data.offers.primary.price;
      return price >= this.startValue && price <= this.endValue; // You can adjust the range as needed
    });
  }
  updateFilter() {
    this.filterProducts();
  }
 
}


