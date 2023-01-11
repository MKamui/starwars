import {GET_PEOPLE, GET_PLANETS, SET_FAVORITES, FILTER_FAVORITES} from './actions'

const initialState = {
  characters: [],
  planets: [],
  favorites: [],
  filtered: []
}

export function reducer(state = initialState, action){
  
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        characters: action.payload
      };
    case GET_PLANETS:
        return {
          ...state,
          planets: action.payload
        };
    case SET_FAVORITES:
      let newFavorites = []
      if(state.favorites.filter(c=> c.name === action.payload.name).length === 0) newFavorites = [...state.favorites, action.payload]
      else newFavorites = state.favorites.filter(c => c.name !== action.payload.name)
      return {
        ...state,
        favorites: newFavorites
      };
    case FILTER_FAVORITES:
      let filter = []
      filter = state.favorites.filter(c=> c.name.toLowerCase().includes(action.payload))
      return {
        ...state,
        filtered: filter
      }
    default:
        return state;
  } 

}

export default reducer;