import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import { AddToCartModal } from "../../components/AddToCartModal"

import type { SearchQuery, FilterProduct, Product } from "../../models/ProductModel"

import ProductService from "../../services/ProductService"

export function ProductPage({ queryOption, sortCmd } : { queryOption:SearchQuery, sortCmd:string }) {
  const [productSelected, setProductSelected] = useState<Product | null>(null);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const showAddToCart = (product: Product) => {
    setProductSelected(product);
    setToggleModal(true);
  }

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await ProductService.getProductsByQuery(queryOption);
      return res.data;
    }
  });

  // const sortedData = (data || []).slice().sort((a, b) => {
  //   switch (sortCmd) {
  //     case "Price: Low to High":
  //       return (a.unitPrice ?? 0) - (b.unitPrice ?? 0);
  //     case "Price: High to Low":
  //       return (b.unitPrice ?? 0) - (a.unitPrice ?? 0);
  //     case "Newest":
  //       return new Date(b.createdAt ?? "").getTime() - new Date(a.createdAt ?? "").getTime();
  //     case "Best Rating":
  //       return (b.averageRatingPoint ?? 0) - (a.averageRatingPoint ?? 0);
  //     case "Most Popular":
  //       return (b.ratingCount ?? 0) - (a.ratingCount ?? 0);
  //     default:
  //       return 0;
  //   }
  // });

  if (!data) return;

  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <h2 className="sr-only">Sản phẩm</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

          {data?.map((product, i) => (
            <div key={i} className="group">

              <Link to={`/product/${product.productId}`}>
                <img src={product.imgs[0]} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover hover:opacity-75 xl:aspect-7/8" />
              </Link>

              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>

              <div className="flex justify-between items-center">
                <p className="mt-1 text-lg font-medium text-gray-900">{new Intl.NumberFormat('vi-VN').format(product.unitPrice ?? 0)} đ</p>
                <button 
                  type="button" 
                  onClick={() => showAddToCart(product)}
                  className="inline-flex items-center p-1 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-amber-500 dark:focus:ring-blue-800"
                >
                  <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                  </svg>
                </button>
              </div>
              
            </div>
          ))}

        </div>

        {toggleModal && productSelected &&
          <AddToCartModal product={productSelected} setActive={setToggleModal} />
        }

      </div>
    </div>
  )
}
