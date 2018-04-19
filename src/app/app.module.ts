import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {CustomerMyAccountComponent} from './customer/component/customer-my-account/customer-my-account.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './shared/search-result/search-result.component';
import { SearchResultListComponent } from './shared/search-result/search-result-list/search-result-list.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerAuthenticationService } from './customer/services/customer-authentication.service';

// const routes :Routes = [
//   {path: '', redirectTo:'/search',pathMatch:'full'},
//   {path: 'search', component:MoviesComponent},
//   {path: 'favourite', component:FavMoviesComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SearchResultComponent,
    SearchResultListComponent,
    HelpComponent,
    SupportComponent,
    AboutUsComponent,
    PoliciesComponent,
    ConnectUsComponent,
    CustomerMyAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
   
    AppRoutingModule,
   
    
  ],
  providers: [CustomerAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
