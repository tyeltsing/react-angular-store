import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardProductComponent } from './card-product/card-product.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './service/http.service';
import { LogService } from './service/log.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CardProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    HttpModule,
    FormsModule
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
