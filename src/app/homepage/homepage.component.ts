import { Component, OnInit } from '@angular/core';
import * as jsonData from '../assets/db_data.json'
//import * as jsonData from '../assets/test.json'
import { SaveProductService } from '../save-product.service';
import { HeaderComponent } from '../header/header.component';
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
  }
  saveProduct(value: any){
    console.log('saving ');
    console.log(value);
    this.saveProductService.saveProductService(value);
  }

    // Sub cat selection
    
}
