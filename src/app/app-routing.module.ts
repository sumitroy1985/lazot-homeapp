import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'new-user-register',
    loadChildren: () => import('./new-user-register/new-user-register.module').then( m => m.NewUserRegisterPageModule)
  },
  {
    path: 'gateway',
    loadChildren: () => import('./gateway/gateway.module').then( m => m.GatewayPageModule)
  },
  {
    path: 'pattern-login',
    loadChildren: () => import('./pattern-login/pattern-login.module').then( m => m.PatternLoginPageModule)
  },
  {
    path: 'gateway-onboarding',
    loadChildren: () => import('./gateway-onboarding/gateway-onboarding.module').then( m => m.GatewayOnboardingPageModule)
  },
  {
    path: 'gateway-configuration',
    loadChildren: () => import('./gateway-configuration/gateway-configuration.module').then( m => m.GatewayConfigurationPageModule)
  },
  {
    path: 'add-device',
    loadChildren: () => import('./add-device/add-device.module').then( m => m.AddDevicePageModule)
  },
  {
    path: 'scan-now',
    loadChildren: () => import('./scan-now/scan-now.module').then( m => m.ScanNowPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
