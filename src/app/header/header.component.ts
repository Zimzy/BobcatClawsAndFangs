import { Component } from '@angular/core';
import * as jsonData from '../assets/db_data.json';
import { SaveProductService } from '../save-product.service';
import { ToolbarRouteService } from '../toolbar-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data: any = jsonData;
  constructor(private saveProductService: SaveProductService, private toolbarRouteService: ToolbarRouteService){}
  

  onSelectSubCategory(subCat: string){
    this.toolbarRouteService.onSelectSubCategory(subCat);
  }

}
