import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    children:[
      {path: 'change-detection', loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),  title: 'Change Detection',},
      {path: 'control-flow',     loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),          title: 'Control Flow',},
      {path: 'defer-options',    loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),        title: 'Defer Options',},
      {path: 'defer-views',      loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),        title: 'Defer Views',},
      {path: 'user/:id',          loadComponent: () => import('./dashboard/pages/user/user.component'),                          title: 'User View',},
      {path: 'user-list',        loadComponent: () => import('./dashboard/pages/users/users.component'),                        title: 'User List',},
      {path: 'view-transition-1',  loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),    title: 'View Transition',},
      {path: 'view-transition-2',  loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),    title: 'View Transition 2',},

      {path:'', redirectTo: 'control-flow', pathMatch: 'full'}
    ]
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];
