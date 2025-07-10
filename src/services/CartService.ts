import { publicApi } from "../configs/AxiosConfig"

import type { AddtoCart } from "../models/CartModel"

const endpoint = '/carts';

const CartService = {
  getUserCart: async (token: string) => {
    const res = await publicApi.get(`${endpoint}/mine`, { headers: { Authorization: `Bearer ${token}` }});
    return res.data;
  },
  addItemToCart: async (cartItem: AddtoCart) => {
    const res = await publicApi.post(`${endpoint}/items`, { cartItem });
    return res.data;
  }
  // updateQuantity: (cartItemId, quantity) => httpClient.patch(`${endpoint}/items/${cartItemId}/quantity`, { quantity }),
  // updateNote: (cartItemId, note) => httpClient.patch(`${endpoint}/items/${cartItemId}/note`, { note }),
  // deleteItem: (cartItemId) => httpClient.delete(`${endpoint}/items/${cartItemId}`),
};

export default CartService;
