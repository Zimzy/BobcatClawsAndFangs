import { Component, OnInit } from '@angular/core';
import * as jsonData from 'src/assets/db_data.json';
//import * as jsonData from '../assets/test.json'
import { SaveProductService } from '../save-product.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data: any = jsonData;
 searchResults = this.data.Best_Buy.Product;
 store: any = this.data.Best_Buy.Name;

 constructor(public saveProductService: SaveProductService, ){}
  ngOnInit(){
    console.log('Product Data',this.searchResults);

    this.saveProductService.saveCatService(this.data.Best_Buy.Product) //temp fix for similar products
     this.saveProductService.saveKeyword("Coffee and Tea Makers")
  }
  saveProduct(value: any){
    console.log('saving ');
    console.log(value);
    this.saveProductService.saveProductService(value);
  }

    onCompareChange(item: any, event: Event): void {
    // 🔹 Don't let this click trigger the parent div's (click) and routerLink
    event.stopPropagation();

    const input = event.target as HTMLInputElement;

    if (input.checked) {
      const result = this.saveProductService.addToCompare(item);

      // If your addToCompare() returns { success, reason }, we can handle max=5
      if (!result.success && result.reason === 'max') {
        // Revert checkbox state
        input.checked = false;

        // TODO: replace with your toast if you want
        alert('You can only compare up to 5 items.');
      }
    } else {
      this.saveProductService.removeFromCompare(item);
    }
  }

    
}
