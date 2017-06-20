import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { TestComponent } from './components/test/test.component';

import { BackendService } from './services/backend.service';
import { CartService } from './services/cart.service';

const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'product/:id', component: ProductComponent},
 {path: 'cart', component: CartComponent},
 {path: 'test', component: TestComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BackendService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
