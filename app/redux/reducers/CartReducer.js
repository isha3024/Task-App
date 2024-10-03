import * as actions from '../Type'

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const itemExists = state.items.find(item => item.id === action.payload.id);
      return { 
        ...state, 
        items: itemExists ? state.items : [...state.items, action.payload]  
      }
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
      case actions.UPDATE_CART:
        return {
          ...state,
          items: action.payload,
        };
    default: 
      return state;
  }
}
