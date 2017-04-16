import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarModule,
         ButtonModule,
         MenuModule,
         MenuItem,
         DropdownModule } from 'primeng/primeng';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchComponent } from './search/search.component';
import { TripsStatusComponent } from './trips-status/trips-status.component';
import { ProfileComponent } from './profile/profile.component';
import { HostDetailsComponent } from './host-details/host-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { SearchService } from 'app/services/search.service';
import { UserService } from 'app/services/user.service';
import { AuthGuard } from 'app/auth-guard.service';


const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'search', component: SearchComponent },
    {path: 'host-detail/:index',  component: HostDetailsComponent },
    {path: 'trips', component: TripsStatusComponent },
    {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
    {path: 'register', component: RegisterUserComponent }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    DropdownModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [ DashboardComponent,
                  MenubarComponent,
                  SearchComponent,
                  TripsStatusComponent,
                  ProfileComponent,
                  HostDetailsComponent,
                  RegisterUserComponent
                ],
  exports: [RouterModule],
  providers: [AuthGuard,
              SearchService,
              UserService]
})
export class DashboardModule { }
