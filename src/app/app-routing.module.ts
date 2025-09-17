import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CoffeeMakersComponent } from './coffee-makers/coffee-makers.component';
import { DetailedproductsComponent } from './detailedproducts/detailedproducts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductspageComponent } from './productspage/productspage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductspageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'categories', component: CategoryPageComponent},
  {path: 'laptops', component: CategoryPageComponent},
  {path: 'Headphones',component: CategoryPageComponent},
  {path: 'coffee', component: CoffeeMakersComponent},
  {path: 'detailedProducts', component: DetailedproductsComponent}

  //TODO: path: 'cart', component: CartComponent. Seperate page for the user's cart

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
