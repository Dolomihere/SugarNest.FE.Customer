
export interface AddtoCart {
  productId: string,
  note: string | null,
  quantity: number,
  productItemOptionModels: ProductOption[]
}

export interface ProductOption {
  optionGroupId: string,
  optionItemId: string
}
