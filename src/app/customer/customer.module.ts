import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './component/customer-register/customer-register.component';
import { CustomerHeaderComponent } from './component/customer-header/customer-header.component';
import { CustomerMyCartComponent } from './component/customer-my-cart/customer-my-cart.component';
import { CustomerHomePageComponent } from './component/customer-home-page/customer-home-page.component';
import { CustomerMyAccountComponent } from './component/customer-my-account/customer-my-account.component';
import { CustomerAddressBookComponent } from './component/customer-my-account/customer-address-book/customer-address-book.component';
import { CustomerBankDetailsComponent } from './component/customer-my-account/customer-bank-details/customer-bank-details.component';
import { CustomerCurrentOrderComponent } from './component/customer-my-account/customer-current-order/customer-current-order.component';
import { CustomerPreviousOrderComponent } from './component/customer-my-account/customer-previous-order/customer-previous-order.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ],
  declarations: [CustomerLoginComponent, CustomerRegisterComponent, CustomerHeaderComponent, CustomerMyCartComponent, CustomerHomePageComponent, CustomerMyAccountComponent, CustomerAddressBookComponent, CustomerBankDetailsComponent, CustomerCurrentOrderComponent, CustomerPreviousOrderComponent]
})
export class CustomerModule { }
