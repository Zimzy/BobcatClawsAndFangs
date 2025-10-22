import { Component, OnInit } from '@angular/core';
import * as jsonData from '../assets/db_data.json';
import { SaveProductService } from '../save-product.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})

export class CartComponent implements OnInit{
  constructor(private saveProductService: SaveProductService, ){}
  data: any = jsonData;
  //bookmarkedProducts: any[] = [];
  cartProcessed: any[] = [];
  

  ngOnInit(){
    
    this.cartCleanup();
    
  }

  onSelectSubCategory(subCategory: string) {
    // Handling logic here
    console.log('select sub category');
    console.log(`Selected subcategory: ${subCategory}`);
    //add more routing for each category here
    switch(subCategory) {
    // Accessories
    case 'Bedding and Linens':
     // this.router.navigate(['/accessories/bedding']);
      break;
    case 'Desk Supplies':
     // this.router.navigate(['/accessories/desk-supplies']);
      break;
    case 'Room Decor':
     // this.router.navigate(['/accessories/room-decor']);
      break;
    case 'Storage Solutions':
      //this.router.navigate(['/accessories/storage-solutions']);
      break;
    case 'Kitchen and Dining':
     // this.router.navigate(['/accessories/kitchen-dining']);
      break;

    // Electronics
    case 'Laptops and Accessories':
     // this.router.navigate(['/electronics/laptops-accessories']);
     console.log('lap',this.data.search_results)
     this.saveProductService.saveCatService(this.data.search_results)
     this.saveProductService.saveKeyword("Laptops")
      break;
    case 'Audio and Headphones':
     // this.router.navigate(['/electronics/audio-headphones']);
     console.log('HP',this.data.search_results)
     this.saveProductService.saveCatService(this.data.search_results_HP)
     this.saveProductService.saveKeyword("Audio and Headphones")
      break;
    case 'Gaming and Entertainment':
     // this.router.navigate(['/electronics/gaming-entertainment']);
      break;
    case 'Smart Home Devices':
     // this.router.navigate(['/electronics/smart-home-devices']);
      break;
    case 'Cables and Adapters':
     // this.router.navigate(['/electronics/cables-adapters']);
      break;

    // Appliances
    case 'Mini Fridges':
      //this.router.navigate(['/appliances/mini-fridges']);
      break;
    case 'Microwaves and Cooking Appliances':
     // this.router.navigate(['/appliances/microwaves-cooking-appliances']);
      break;
    case 'Coffee and Tea Makers':
     // this.router.navigate(['/appliances/coffee-tea-makers']);
     console.log('cof',this.data.Best_Buy.Product)
     this.saveProductService.saveCatService(this.data.Best_Buy.Product)
     this.saveProductService.saveKeyword("Coffee and Tea Makers")
      break;
    case 'Laundry and Cleaning Appliances':
      //this.router.navigate(['/appliances/laundry-cleaning-appliances']);
      break;
    case 'Heating and Cooling':
      //this.router.navigate(['/appliances/heating-cooling']);
      break;
  
      default:
        // Handle other cases as needed
        break;
    }
  }

  

  cartCleanup(){
    
    //Standardized product type
    interface product {

      Name: string;
      Price: number;
      image_URL: string;
    
  }

  

    
    for(let i = 0; i<this.saveProductService.cart.length; i++){
      
      if (this.saveProductService.cart[i].offers){

        let item: product = {"Name": this.saveProductService.cart[i].product.title, "Price": this.saveProductService.cart[i].offers.primary.price, 
          "image_URL": this.saveProductService.cart[i].product.main_image};
        this.saveProductService.cart[i] = item;
        //console.log('product: ', this.cartProcessed[i].Name);

      }
      else if (this.saveProductService.cart[i].Keywords) {
        let item: product = {"Name": this.saveProductService.cart[i].Name, "Price": this.saveProductService.cart[i].Price, 
          "image_URL": this.saveProductService.cart[i].Img_URL};
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
  


}