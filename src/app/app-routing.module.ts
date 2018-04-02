import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component'
import { DetailComponent } from './catalog/detail/detail.component'
import { CarListComponent } from './car-list/car-list.component'

import { LoginComponent } from './login/login.component'

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'products', component: CatalogComponent },
	{ path: 'detail/:id', component: DetailComponent },
	{ path: 'cart', component: CarListComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule { }
