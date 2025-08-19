import type { AppState } from '../types';
import type { AppAction } from './types.ts';
import { initialFilters } from './constants.ts';

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'UPDATE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: action.payload.value,
        },
      };
    
    case 'RESET_FILTERS':
      return { ...state, filters: initialFilters };

    case 'TOGGLE_EMPLOYEE':
      return { ...state, isEmployee: !state.isEmployee };
    
    default:
      return state;
  }
}