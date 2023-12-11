import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveProductService {
   productValue: any ;
   productCategory: any;
   keyword: any;
   // saves clicked on product for detailed product page functionality 
   saveProductService(value: any){
    this.productValue = value;
   }
   //saves keyword to display on categories page
   saveKeyword(value: any){
    this.keyword = value;
   }
   getKeyword(){
    return this.keyword;
   }
   //saves JSON of category for categories page
   saveCatService(value: any){
    this.productCategory = value;
    console.log('cat',this.productCategory)
   }
   getCat(){
    return this.productCategory;
   }
   getProduct(){
    console.log('value', this.productValue)
    return this.productValue;
   }
  constructor() { }
}
