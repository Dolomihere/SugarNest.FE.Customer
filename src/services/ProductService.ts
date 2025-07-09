import { publicApi } from "../configs/AxiosConfig"

import type { Product } from "../models/ProductModel"
import type { ApiResponse } from "../models/ApiWrapper"

const endpoint = '/products';

const ProductService = {
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    const res = await publicApi.get(`${endpoint}/sellable`);
    return res.data.data;
  },
  getProductPagination: async (pageIndex: number, pageSize: number): Promise<ApiResponse<Product[]>> => {
    const res = await publicApi.get(`${endpoint}/sellable?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    return res.data.data;
  },
  getById: async (id: string): Promise<ApiResponse<Product>> => {
    const res = await publicApi.get(`${endpoint}/sellable/${id}`);
    console.log(res.data);
    return res.data;
  },
}

export default ProductService;
