import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './composants/cars/cars.component';
import { GestionAdminComponent } from './composants/gestion-admin/gestion-admin.component';
import { HomeComponent } from './composants/home/home.component';
import { MotoComponent } from './composants/moto/moto.component';
import { ProductsComponent } from './composants/products/products.component';
import { TrottinetteComponent } from './composants/trottinette/trottinette.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent },
  {path: "cars", component: CarsComponent },
  {path: "moto", component: MotoComponent },
  {path: "trottinette", component: TrottinetteComponent },
  {path: "gestionAdmin", component: GestionAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
