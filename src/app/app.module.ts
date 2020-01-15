import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule , routingComponents} from "./app-routing.module";
import { AppComponent } from "./app.component";
// we need to import ReactiveFormsModule and assign it in imports
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { AccountComponent } from "./user/account/account.component";
import { CartComponent } from "./user/cart/cart.component";
import { CheckoutComponent } from "./user/checkout/checkout.component";
import { LoginComponent } from "./user/login/login.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { AddProductComponent } from "./dashboard/add-product/add-product.component";
import { MenComponent } from "./dashboard/men/men.component";
import { WomenComponent } from "./dashboard/women/women.component";
import { NavBarComponent } from "./dashboard/nav-bar/nav-bar.component";
import { OredersComponent } from "./dashboard/oreders/oreders.component";
import { SideBarComponent } from "./dashboard/side-bar/side-bar.component";
import { CategoriesComponent } from "./body-components/categories/categories.component";
import { ProductDetailsComponent } from "./body-components/product-details/product-details.component";
import { ProductListComponent } from "./body-components/product-list/product-list.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    SignUpComponent,
    AddProductComponent,
    routingComponents,// this variable  will hold all the component in the route.module so you dont need witre it here again
    NavBarComponent,
    OredersComponent,
    SideBarComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}