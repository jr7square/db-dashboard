import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarModule, ButtonModule, MenuModule, MenuItem } from 'primeng/primeng';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent, MenubarComponent]
})
export class DashboardModule { }
