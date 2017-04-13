import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { SearchService } from 'app/services/search.service';

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'search', component: SearchComponent },
    {path: 'trips', component: TripsStatusComponent },
    {path: 'profile', component: ProfileComponent }
  ] }
];

@NgModule({
  imports: [
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
                  ProfileComponent
                ],
  exports: [RouterModule],
  providers: [SearchService]
})
export class DashboardModule { }
