/*
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
*/
import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';

export const serverRoutes: ServerRoute[] = [
    {
    path: 'dishes/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];