import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule],
  })
export class PagesRoutingModule {
}