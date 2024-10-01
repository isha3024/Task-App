import * as actions from '../Type'

export const addToCart = (product) => {
  return {
    type: actions.ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (productId) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: productId
  }
}