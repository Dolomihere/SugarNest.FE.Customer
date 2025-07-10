import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import type { SearchQuery, FilterProduct } from "../../models/ProductModel"

import ProductService from "../../services/ProductService"

export function ProductPage({ queryOption, sortCmd } : { queryOption:SearchQuery, sortCmd:string }) {

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await ProductService.getProductsByQuery(queryOption);
      return res.data;
    }
  });

  const sortedData = (data || []).slice().sort((a, b) => {
    switch (sortCmd) {
      case "Price: Low to High":
        return (a.unitPrice ?? 0) - (b.unitPrice ?? 0);
      case "Price: High to Low":
        return (b.unitPrice ?? 0) - (a.unitPrice ?? 0);
      case "Newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "Best Rating":
        return (b.averageRatingPoint ?? 0) - (a.averageRatingPoint ?? 0);
      case "Most Popular":
        return (b.ratingCount ?? 0) - (a.ratingCount ?? 0);
      default:
        return 0;
    }
  });

  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Sản phẩm</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

          {sortedData?.map((product, i) => (
            <Link key={i} to={`/products/${product.productId}`} className="group">
              <img src={product.imgs[0]} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{new Intl.NumberFormat('vi-VN').format(product.unitPrice ?? 0)} đ</p>
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}
