import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'app/auth.service';

const routes: Routes = [
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'login', loadChildren: 'app/log-in/log-in.module#LogInModule'},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService]

})

export class AppRoutingModule { }
