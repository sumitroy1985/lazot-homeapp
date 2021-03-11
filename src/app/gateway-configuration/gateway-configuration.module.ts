import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatewayConfigurationPageRoutingModule } from './gateway-configuration-routing.module';

import { GatewayConfigurationPage } from './gateway-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatewayConfigurationPageRoutingModule
  ],
  declarations: [GatewayConfigurationPage]
})
export class GatewayConfigurationPageModule {}
