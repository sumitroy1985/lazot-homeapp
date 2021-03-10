import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUserRegisterPageRoutingModule } from './new-user-register-routing.module';

import { NewUserRegisterPage } from './new-user-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUserRegisterPageRoutingModule
  ],
  declarations: [NewUserRegisterPage]
})
export class NewUserRegisterPageModule {}
