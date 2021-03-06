import { OrderListComponent } from './components/order-list/order-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
    { path: "login", component:LoginComponent},
   { path: "register", component:RegisterComponent},
   { path:'profile',component:ProfileComponent},
   { path:'admin', component:AdminComponent},
    { path:'products',component:ProductsComponent},
   { path:'category/:id',component:ProductsComponent},
   { path:'cart',component:CartComponent},
   { path:'',component:HomeComponent},
   { path:'home',component:HomeComponent},
   { path:'admin/orders', component:OrderListComponent},
   { path:'admin/products',component:ProductListComponent},
   { path:'add',component:AddProductComponent},
   { path:'wishlist',component:WishlistComponent},
   { path:'checkout',component:CheckoutComponent},
   { path:'admin/categories',component:CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
