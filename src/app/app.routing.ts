import { Routes } from '@angular/router';
import { EmptyComponent } from './layouts/empty/empty.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        component: EmptyComponent,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        component: FullComponent,
        loadChildren:
          () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];
