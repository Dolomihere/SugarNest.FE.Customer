import httpClient from "../configs/AxiosConfig"

const endpoint = '/products';

const ProductService = {
  getProducts: () => httpClient.get(endpoint),
  getById: (id: number) => httpClient.get(`${endpoint}/${id}`),
}

export default ProductService;
