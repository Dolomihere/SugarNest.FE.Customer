export interface AddtoCart {
  productId: string,
  note: string | null,
  quantity: number,
  productItemOptionModels: ProductOption[],
}

export interface ProductOption {
  optionGroupId: string,
  optionItemId: string,
}

export interface Cart {
  cartId: string,
  note: string | null,
  createAt: Date,
  createBy: string | null,
  lastUpdateAt: Date | null,
  lastUpdateBy: Date | null,
  userId: string,
  cartItems: CartItem[],
}

export interface CartItem {
  cartItemId: string,
  productName: string,
  note: string | null,
  unitPrice: number,
  itemAdditionalPrice: number,
  quantity: number,
  total: number,
  cartId: string,
  productId: string,
  cartItemOptions: CartItemOption[],
  createdAt: Date,
  createBy: string | null,
  lastUpdateAt: Date | null,
  lastUpdateBy: Date | null,
}

export interface CartItemOption {
  cartItemOptionId: string,
  optionGroupName: string,
  optionValue: string,
  optionAdditionalPrice: number,
  optionGroupId: string,
  optionItemId: string,
  cartItemId: string,
}
