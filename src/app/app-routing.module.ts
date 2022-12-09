//definition des routes des composants
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyshopComponent}  from './myshop/myshop.component';
import { CartComponent} from './cart/cart.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [

  { path: 'myshop', component: MyshopComponent },
  { path: 'cart', component: CartComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'product', component: ProductComponent },
];
//importion du module NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

