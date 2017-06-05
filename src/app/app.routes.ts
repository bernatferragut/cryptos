import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // these are functions

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BtcComponent } from './btc/btc.component';
import { EthComponent } from './eth/eth.component';

// Route Configuration Array    
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'btc', component: BtcComponent },
    { path: 'eth', component: EthComponent }
    ]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);






