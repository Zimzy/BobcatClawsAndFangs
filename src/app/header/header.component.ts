import { Component } from '@angular/core';
import { SaveProductService } from '../save-product.service';
import * as jsonData from '../assets/db_data.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data: any = jsonData;
  constructor(private saveProductService: SaveProductService, ){}
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
}
