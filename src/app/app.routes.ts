import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    children:[
      {path: 'change-detection', loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),},
      {path: 'control-flow',     loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),},
      {path: 'defer-options',    loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),},
      {path: 'defer-views',      loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),},
      {path: 'user:id',             loadComponent: () => import('./dashboard/pages/user/user.component'),},
      {path: 'user-list',            loadComponent: () => import('./dashboard/pages/users/users.component'),},
      {path: 'view-transition',  loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')},
      {path:'', redirectTo: 'control-flow', pathMatch: 'full'}
    ]
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];
