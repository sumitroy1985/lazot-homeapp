import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanNowPage } from './scan-now.page';

const routes: Routes = [
  {
    path: '',
    component: ScanNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanNowPageRoutingModule {}
