import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { HomepageComponent } from './homepage/homepage.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CoffeeMakersComponent } from './coffee-makers/coffee-makers.component';
import { DetailedproductsComponent } from './detailedproducts/detailedproducts.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { QueryserviceComponent } from './queryservice/queryservice.component';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductspageComponent,
    CategoryPageComponent,
    CoffeeMakersComponent,
    DetailedproductsComponent,
    SearchBarComponent,
    HeaderComponent,
    QueryserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule, // Add MatFormFieldModule here
    MatInputModule, // Add MatInputModule here
    MatPaginatorModule,
    MatListModule,
    MatSliderModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
