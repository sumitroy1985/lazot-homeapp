import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanNowPageRoutingModule } from './scan-now-routing.module';

import { ScanNowPage } from './scan-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanNowPageRoutingModule
  ],
  declarations: [ScanNowPage]
})
export class ScanNowPageModule {}
