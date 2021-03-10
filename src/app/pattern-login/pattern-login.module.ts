import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatternLoginPageRoutingModule } from './pattern-login-routing.module';

import { PatternLoginPage } from './pattern-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatternLoginPageRoutingModule
  ],
  declarations: [PatternLoginPage]
})
export class PatternLoginPageModule {}
