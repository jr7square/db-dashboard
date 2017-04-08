import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/log-in/log-in.module#LogInModule'},
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard, AuthService]
})

export class AppRoutingModule { }
