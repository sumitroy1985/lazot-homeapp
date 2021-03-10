import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatewayOnboardingPageRoutingModule } from './gateway-onboarding-routing.module';

import { GatewayOnboardingPage } from './gateway-onboarding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatewayOnboardingPageRoutingModule
  ],
  declarations: [GatewayOnboardingPage]
})
export class GatewayOnboardingPageModule {}
