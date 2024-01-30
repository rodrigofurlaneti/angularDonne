import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';

import { BuyerCreateComponent } from './buyer/buyer-create/buyer-create.component';
import { BuyerDeleteComponent } from './buyer/buyer-delete/buyer-delete.component';
import { BuyerListComponent } from './buyer/buyer-list/buyer-list.component';
import { BuyerUpdateComponent } from './buyer/buyer-update/buyer-update.component';

import { CommandCreateComponent } from './command/command-create/command-create.component';
import { CommandDeleteComponent } from './command/command-delete/command-delete.component';
import { CommandListComponent } from './command/command-list/command-list.component';
import { CommandSearchComponent } from './command/command-search/command-search.component';

import { PaymentCreateComponent } from './payment/payment-create/payment-create.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';

import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { MainComponent } from './main/main.component';

import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDeleteComponent } from './order/order-delete/order-delete.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductShoppingListComponent } from './product/product-shoppinglist/product-shoppinglist.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductStockInventoryComponent } from './product/product-stockinventory/product-stockinventory.component';

import { OrderUpdateComponent } from './order/order-update/order-update.component';

import { FormOfPaymentCreateComponent } from './formofpayment/formofpayment-create/formofpayment-create.component';
import { FormOfPaymentListComponent } from './formofpayment/formofpayment-list/formofpayment-list.component';
import { FormOfPaymentDeleteComponent } from './formofpayment/formofpayment-delete/formofpayment-delete.component';
import { FormOfPaymentUpdateComponent } from './formofpayment/formofpayment-update/formofpayment-update.component';

import { VehicleTypeCreateComponent } from './vehicleType/vehicleType-create/vehicleType-create.component';
import { VehicleTypeListComponent } from './vehicleType/vehicleType-list/vehicleType-list.component';
import { VehicleTypeDeleteComponent } from './vehicleType/vehicleType-delete/vehicleType-delete.component';
import { VehicleTypeUpdateComponent } from './vehicleType/vehicleType-update/vehicleType-update.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'buyer-create', component: BuyerCreateComponent },
  { path: 'buyer-delete', component: BuyerDeleteComponent },
  { path: 'buyer-list', component: BuyerListComponent },
  { path: 'buyer-update', component: BuyerUpdateComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'category-delete', component: CategoryDeleteComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-update', component: CategoryUpdateComponent },
  { path: 'command-create', component: CommandCreateComponent },
  { path: 'command-list', component: CommandListComponent },
  { path: 'command-search', component: CommandSearchComponent },
  { path: 'command-delete', component: CommandDeleteComponent },
  { path: 'formofpayment-create', component: FormOfPaymentCreateComponent },
  { path: 'formofpayment-list', component: FormOfPaymentListComponent },
  { path: 'formofpayment-delete', component: FormOfPaymentDeleteComponent },
  { path: 'formofpayment-update', component: FormOfPaymentUpdateComponent },
  { path: 'order-create', component: OrderCreateComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-delete', component: OrderDeleteComponent },
  { path: 'order-update', component: OrderUpdateComponent },
  { path: 'payment-create', component: PaymentCreateComponent },
  { path: 'payment-list', component: PaymentListComponent },
  { path: 'profile-create', component: ProfileCreateComponent },
  { path: 'profile-delete', component: ProfileDeleteComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'profile-update', component: ProfileUpdateComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-shoppinglist', component: ProductShoppingListComponent },
  { path: 'product-delete', component: ProductDeleteComponent },
  { path: 'product-update', component: ProductUpdateComponent },
  { path: 'product-stockinventory', component: ProductStockInventoryComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-update', component: UserUpdateComponent },
  { path: 'user-delete', component: UserDeleteComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'vehicleType-create', component: VehicleTypeCreateComponent },
  { path: 'vehicleType-list', component: VehicleTypeListComponent },
  { path: 'vehicleType-delete', component: VehicleTypeDeleteComponent }, 
  { path: 'vehicleType-update', component: VehicleTypeUpdateComponent }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
