import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesDashboardComponent } from './devices-dashboard/devices-dashboard.component';

const routes: Routes = [
  {path: 'devices', component: DevicesDashboardComponent},
  {path: 'categories', component: DevicesDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
