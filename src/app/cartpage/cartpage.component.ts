import { Component } from '@angular/core';
import * as jsonData from '../assets/db_data.json';
import { SaveProductService } from '../save-product.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  //template: '',

  styleUrls: ['./cartpage.component.css']
})

export class CartComponent {
  constructor(private saveProductService: SaveProductService, ){}
  data: any = jsonData;
  bookmarkedProducts: any[] = [];
  ngOnInit(){
    console.log('Product Data',this.bookmarkedProducts);
  }
}