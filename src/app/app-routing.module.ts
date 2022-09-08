import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "brands", pathMatch: "full"},
  { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) },
  { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
