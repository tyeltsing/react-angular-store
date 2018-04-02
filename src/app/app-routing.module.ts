import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path:'products', component: CatalogComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule { }
