import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewayOnboardingPage } from './gateway-onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: GatewayOnboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewayOnboardingPageRoutingModule {}
