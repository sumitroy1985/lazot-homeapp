import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUserRegisterPage } from './new-user-register.page';

const routes: Routes = [
  {
    path: '',
    component: NewUserRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUserRegisterPageRoutingModule {}
