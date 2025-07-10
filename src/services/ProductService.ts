import { publicApi } from "../configs/AxiosConfig"

import type { Product, SearchQuery } from "../models/ProductModel"
import type { ApiResponse } from "../models/ApiWrapper"

const endpoint = '/products';

const ProductService = {
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    const res = await publicApi.get(`${endpoint}/sellable`);
    return res.data;
  },
  getProductsByQuery: async (queryOption: SearchQuery): Promise<ApiResponse<Product[]>> => {
    const res = await publicApi.get(`${endpoint}/sellable?pageIndex=${queryOption.pageIndex}&pageSize=${queryOption.pageSize}`);
    return res.data;
  },
  getById: async (id: string): Promise<ApiResponse<Product>> => {
    const res = await publicApi.get(`${endpoint}/sellable/${id}`);
    return res.data;
  },
}

export default ProductService;
