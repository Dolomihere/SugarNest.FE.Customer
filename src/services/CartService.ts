import { publicApi } from "../configs/AxiosConfig"

import type { AddtoCart, Cart } from "../models/CartModel"
import type { ApiResponse } from "../models/ApiWrapper";

const endpoint = '/carts';

const CartService = {
  getUserCart: async (token: string) => {
    const res = await publicApi.get(`${endpoint}/mine`, { headers: { Authorization: `Bearer ${token}` }});
    return res.data;
  },
  getGuestCart: async (cartId: string): Promise<ApiResponse<Cart>> => {
    const res = await publicApi.get(`${endpoint}/guest/${cartId}`);
    return res.data;
  },
  addItemToCart: async (cartItem: AddtoCart) => {
    const res = await publicApi.post(`${endpoint}/items`, { cartItem });
    return res.data;
  },
  updateQuantity: async (cartItemId: string, quantity: number) => {
    const res = await publicApi.patch(`${endpoint}/items/${cartItemId}/quantity`, { quantity });
    return res.data;
  },
  // updateNote: (cartItemId, note) => httpClient.patch(`${endpoint}/items/${cartItemId}/note`, { note }),
  // deleteItem: (cartItemId) => httpClient.delete(`${endpoint}/items/${cartItemId}`),
};

export default CartService;
