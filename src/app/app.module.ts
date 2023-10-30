import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//About
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';

//Buyer
import { BuyerCreateModule } from './buyer/buyer-create/buyer-create.module';
import { BuyerCreateComponent } from './buyer/buyer-create/buyer-create.component';
import { BuyerDeleteComponent } from './buyer/buyer-delete/buyer-delete.component';
import { BuyerListComponent } from './buyer/buyer-list/buyer-list.component';
import { BuyerUpdateComponent } from './buyer/buyer-update/buyer-update.component';

//Category
import { CategoryCreateModule } from './category/category-create/category-create.module';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';

//Command
import { CommandCreateModule } from './command/command-create/command-create.module';
import { CommandCreateComponent } from './command/command-create/command-create.component';
import { CommandDeleteModule } from './command/command-delete/command-delete.module';
import { CommandDeleteComponent } from './command/command-delete/command-delete.component';
import { CommandListModule } from './command/command-list/command-list.module';
import { CommandListComponent } from './command/command-list/command-list.component';
import { CommandSearchModule } from './command/command-search/command-search.module';
import { CommandSearchComponent } from './command/command-search/command-search.component';


//FormOfPayment
import { FormOfPaymentCreateModule } from './formofpayment/formofpayment-create/formofpayment-create.module';
import { FormOfPaymentCreateComponent } from './formofpayment/formofpayment-create/formofpayment-create.component';
import { FormOfPaymentListComponent } from './formofpayment/formofpayment-list/formofpayment-list.component';
import { FormOfPaymentDeleteComponent } from './formofpayment/formofpayment-delete/formofpayment-delete.component';
import { FormOfPaymentUpdateComponent } from './formofpayment/formofpayment-update/formofpayment-update.component';

//Main
import { MainComponent } from './main/main.component';

//Order
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderDeleteComponent } from './order/order-delete/order-delete.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';

//Payment
import { PaymentCreateComponent } from './payment/payment-create/payment-create.component';
import { PaymentCreateModule } from './payment/payment-create/payment-create.module';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentListModule } from './payment/payment-list/payment-list.module';

//Product
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductShoppingListComponent } from './product/product-shoppinglist/product-shoppinglist.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

//Profile
import { ProfileCreateModule } from './profile/profile-create/profile-create.module';
import { ProfileDeleteModule } from './profile/profile-delete/profile-delete.module';
import { ProfileListModule } from './profile/profile-list/profile-list.module';
import { ProfileUpdateModule } from './profile/profile-update/profile-update.module';
import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

//User
import { UserCreateModule } from './user/user-create/user-create.module';
import { UserDeleteModule } from './user/user-delete/user-delete.module';
import { UserListModule } from './user/user-list/user-list.module';
import { UserUpdateModule } from './user/user-update/user-update.module';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

//Material
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatGridListModule } from '@angular/material/grid-list';

import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    MainComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    CommandCreateComponent,
    CommandDeleteComponent,
    CommandListComponent,
    CommandSearchComponent,
    BuyerCreateComponent,
    BuyerDeleteComponent,
    BuyerListComponent,
    BuyerUpdateComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderDeleteComponent,
    OrderUpdateComponent,
    PaymentCreateComponent,
    PaymentListComponent,
    ProfileCreateComponent,
    ProfileDeleteComponent,
    ProfileListComponent,
    ProfileUpdateComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserListComponent,
    UserUpdateComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductShoppingListComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    FormOfPaymentCreateComponent,
    FormOfPaymentListComponent,
    FormOfPaymentDeleteComponent,
    FormOfPaymentUpdateComponent
  ],
  imports: [
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    AboutModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkAccordionModule,
    CategoryCreateModule,
    CommandCreateModule,
    CommandDeleteModule,
    CommandListModule,
    CommandSearchModule,
    BuyerCreateModule,
    PaymentCreateModule,
    PaymentListModule,
    ProfileCreateModule,
    ProfileDeleteModule,
    ProfileListModule,
    ProfileUpdateModule,
    FormOfPaymentCreateModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTooltipModule,
    MatCheckboxModule,
    UserCreateModule,
    UserDeleteModule,
    UserListModule,
    UserUpdateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
