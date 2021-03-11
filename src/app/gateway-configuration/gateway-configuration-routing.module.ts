import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewayConfigurationPage } from './gateway-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: GatewayConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewayConfigurationPageRoutingModule {}
