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

 
 constructor(private saveProductService: SaveProductService, ){}
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

    // Sub cat selection
    
}
