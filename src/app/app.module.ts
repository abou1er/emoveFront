import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import des composants
import { HomeComponent } from './composants/home/home.component';
import { BarnavComponent } from './composants/barnav/barnav.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ProductsComponent } from './composants/products/products.component';
import { CarsComponent } from './composants/cars/cars.component';
import { MotoComponent } from './composants/moto/moto.component';
import { TrottinetteComponent } from './composants/trottinette/trottinette.component';
import { GestionAdminComponent } from './composants/gestion-admin/gestion-admin.component';

// import du FormsModule qui active les futures balises <form>
import { FormsModule } from '@angular/forms';

// import pour le service HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// import du ngxPagination Module qui permet de faire la pagination
import {NgxPaginationModule} from 'ngx-pagination';

import { AjoutervehiculeComponent } from './composants/ajoutervehicule/ajoutervehicule.component';
import { CommandesComponent } from './composants/commandes/commandes.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    BarnavComponent,
    FooterComponent,
    ProductsComponent,
    CarsComponent,
    MotoComponent,
    TrottinetteComponent,
    GestionAdminComponent,
    AjoutervehiculeComponent,
    CommandesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
