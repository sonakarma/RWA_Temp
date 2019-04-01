import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/core/login/login.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component';
import { PropertyComponent } from './components/core/dashboard/property/property.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'property', component: PropertyComponent, data: {
          breadcrumb: 'Property'
        }
      },
      /*{ path: '**', redirectTo: 'user', pathMatch: 'full'}*/
      {  path: '**', redirectTo: 'dashboard', pathMatch: 'full'  }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
