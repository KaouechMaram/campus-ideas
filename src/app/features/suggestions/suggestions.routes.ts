import { Routes } from '@angular/router';
import { ListSuggestionComponent } from '../../core/list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details';

export const SUGGESTIONS_ROUTES: Routes = [

  {
    path: '',
    component: ListSuggestionComponent
  },

  {
    path: ':id',
    component: SuggestionDetailsComponent
  }

];
