import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.page'),
    data: {
      title: 'Catbreeds',
    },
  },
  {
    path: 'detail/:name',
    loadComponent: () => import('./pages/cat-detail/cat-detail.page'),

  }
];
