import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { Notfound } from './core/notfound/notfound';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'listSuggestion',
    component: ListSuggestionComponent
  },

  {
    path: 'suggestions',
    loadChildren: () =>
      import('./features/suggestions/suggestions.routes')
        .then(m => m.SUGGESTIONS_ROUTES)
  },

  {
    path: '**',
    component: Notfound
  }

];
