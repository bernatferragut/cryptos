import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TimeApiService } from './services/time-api.service';
import { CryptoApiService } from './services/crypto-api.service';
import { BtcComponent } from './btc/btc.component';
import { EthComponent } from './eth/eth.component';
import { LoginComponent } from './login/login.component';
import { router } from './app.routes';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BtcComponent,
    EthComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule.forRoot(router, {useHash: true}),
    MomentModule,
    FlexLayoutModule
  ],
  providers: [TimeApiService, CryptoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
