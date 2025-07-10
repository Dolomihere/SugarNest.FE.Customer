import { publicApi } from "../configs/AxiosConfig"

import type { ApiResponse } from "../models/ApiWrapper";
import type { Category } from "../models/ProductModel"

const endpoint = '/categories';

const CategoryService = {
  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    const res = await publicApi.get(`${endpoint}/sellable`);
    return res.data;
  },
  getCategoryById: async (id: string): Promise<ApiResponse<Category>> => {
    const res = await publicApi.get(`${endpoint}/sellable${id}`);
    return res.data;
  }
}

export default CategoryService;
