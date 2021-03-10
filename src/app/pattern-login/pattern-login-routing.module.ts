import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatternLoginPage } from './pattern-login.page';

const routes: Routes = [
  {
    path: '',
    component: PatternLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternLoginPageRoutingModule {}
