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

//Command
import { CompanyAssetCreateModule } from './companyAsset/companyAsset-create/companyAsset-create.module';
import { CompanyAssetCreateComponent } from './companyAsset/companyAsset-create/companyAsset-create.component';
import { CompanyAssetDeleteModule } from './companyAsset/companyAsset-delete/companyAsset-delete.module';
import { CompanyAssetDeleteComponent } from './companyAsset/companyAsset-delete/companyAsset-delete.component';
import { CompanyAssetListModule } from './companyAsset/companyAsset-list/companyAsset-list.module';
import { CompanyAssetListComponent } from './companyAsset/companyAsset-list/companyAsset-list.component';
import { CompanyAssetUpdateModule } from './companyAsset/companyAsset-update/companyAsset-update.module';
import { CompanyAssetUpdateComponent } from './companyAsset/companyAsset-update/companyAsset-update.component';


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
import { ProductStockInventoryComponent } from './product/product-stockinventory/product-stockinventory.component';

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

//Vehicle
import { VehicleCreateModule } from './vehicle/vehicle-create/vehicle-create.module';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleListModule } from './vehicle/vehicle-list/vehicle-list.module';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

//Vehicle Color
import { VehicleColorCreateModule } from './vehicleColor/vehicleColor-create/vehicleColor-create.module';
import { VehicleColorCreateComponent } from './vehicleColor/vehicleColor-create/vehicleColor-create.component';
import { VehicleColorListComponent } from './vehicleColor/vehicleColor-list/vehicleColor-list.component';
import { VehicleColorListModule } from './vehicleColor/vehicleColor-list/vehicleColor-list.module';
import { VehicleColorDeleteComponent } from './vehicleColor/vehicleColor-delete/vehicleColor-delete.component';
import { VehicleColorDeleteModule } from './vehicleColor/vehicleColor-delete/vehicleColor-delete.module';
import { VehicleColorUpdateComponent } from './vehicleColor/vehicleColor-update/vehicleColor-update.component';
import { VehicleColorUpdateModule } from './vehicleColor/vehicleColor-update/vehicleColor-update.module';

//Vehicle Type
import { VehicleTypeCreateModule } from './vehicleType/vehicleType-create/vehicleType-create.module';
import { VehicleTypeCreateComponent } from './vehicleType/vehicleType-create/vehicleType-create.component';
import { VehicleTypeListModule } from './vehicleType/vehicleType-list/vehicleType-list.module';
import { VehicleTypeListComponent } from './vehicleType/vehicleType-list/vehicleType-list.component';
import { VehicleTypeDeleteComponent } from './vehicleType/vehicleType-delete/vehicleType-delete.component';
import { VehicleTypeDeleteModule } from './vehicleType/vehicleType-delete/vehicleType-delete.module';
import { VehicleTypeUpdateComponent } from './vehicleType/vehicleType-update/vehicleType-update.component';
import { VehicleTypeUpdateModule } from './vehicleType/vehicleType-update/vehicleType-update.module';

//Brand
import { VehicleBrandCreateModule } from './vehicleBrand/vehicleBrand-create/vehicleBrand-create.module';
import { VehicleBrandCreateComponent } from './vehicleBrand/vehicleBrand-create/vehicleBrand-create.component';
import { VehicleBrandDeleteModule } from './vehicleBrand/vehicleBrand-delete/vehicleBrand-delete.module';
import { VehicleBrandDeleteComponent } from './vehicleBrand/vehicleBrand-delete/vehicleBrand-delete.component';
import { VehicleBrandListModule } from './vehicleBrand/vehicleBrand-list/vehicleBrand-list.module';
import { VehicleBrandListComponent } from './vehicleBrand/vehicleBrand-list/vehicleBrand-list.component';
import { VehicleBrandUpdateModule } from './vehicleBrand/vehicleBrand-update/vehicleBrand-update.module';
import { VehicleBrandUpdateComponent } from './vehicleBrand/vehicleBrand-update/vehicleBrand-update.component';

//Vehicle Model
import { VehicleModelCreateComponent } from './vehicleModel/vehicleModel-create/vehicleModel-create.component';
import { VehicleModelCreateModule } from './vehicleModel/vehicleModel-create/vehicleModel-create.module';
import { VehicleModelListComponent } from './vehicleModel/vehicleModel-list/vehicleModel-list.component';
import { VehicleModelListModule } from './vehicleModel/vehicleModel-list/vehicleModel-list.module';
import { VehicleModelDeleteComponent } from './vehicleModel/vehicleModel-delete/vehicleModel-delete.component';
import { VehicleModelDeleteModule } from './vehicleModel/vehicleModel-delete/vehicleModel-delete.module';
import { VehicleModelUpdateComponent } from './vehicleModel/vehicleModel-update/vehicleModel-update.component';
import { VehicleModelUpdateModule } from './vehicleModel/vehicleModel-update/vehicleModel-update.module';

//Material
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    CompanyAssetCreateComponent,
    CompanyAssetUpdateComponent,
    CompanyAssetListComponent,
    CompanyAssetDeleteComponent,
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
    ProductStockInventoryComponent,
    FormOfPaymentCreateComponent,
    FormOfPaymentListComponent,
    FormOfPaymentDeleteComponent,
    FormOfPaymentUpdateComponent,
    VehicleCreateComponent,
    VehicleListComponent,
    VehicleColorCreateComponent,
    VehicleColorListComponent,
    VehicleColorDeleteComponent,
    VehicleColorUpdateComponent,
    VehicleTypeCreateComponent,
    VehicleTypeListComponent,
    VehicleTypeDeleteComponent,
    VehicleTypeUpdateComponent,
    VehicleBrandCreateComponent,
    VehicleBrandDeleteComponent,
    VehicleBrandListComponent,
    VehicleBrandUpdateComponent,
    VehicleModelCreateComponent,
    VehicleModelListComponent,
    VehicleModelDeleteComponent,
    VehicleModelUpdateComponent
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
    CompanyAssetCreateModule,
    CompanyAssetDeleteModule,
    CompanyAssetListModule,
    CompanyAssetUpdateModule,
    BuyerCreateModule,
    PaymentCreateModule,
    PaymentListModule,
    ProfileCreateModule,
    ProfileDeleteModule,
    ProfileListModule,
    ProfileUpdateModule,
    FormOfPaymentCreateModule,
    VehicleCreateModule,
    VehicleListModule,
    VehicleColorCreateModule,
    VehicleColorListModule,
    VehicleColorDeleteModule,
    VehicleColorUpdateModule, 
    VehicleTypeCreateModule,
    VehicleTypeListModule,
    VehicleTypeUpdateModule,
    VehicleTypeDeleteModule,
    VehicleBrandCreateModule,
    VehicleBrandDeleteModule,
    VehicleBrandListModule,
    VehicleBrandUpdateModule,
    VehicleModelCreateModule,
    VehicleModelListModule,
    VehicleModelDeleteModule,
    VehicleModelUpdateModule,
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
    MatDatepickerModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatSlideToggleModule,
    MatTabsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    UserCreateModule,
    UserDeleteModule,
    UserListModule,
    UserUpdateModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
