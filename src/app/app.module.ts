import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cartpage/cartpage.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CoffeeMakersComponent } from './coffee-makers/coffee-makers.component';
import { DetailedproductsComponent } from './detailedproducts/detailedproducts.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { QueryserviceComponent } from './queryservice/queryservice.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
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
    CartComponent,
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
