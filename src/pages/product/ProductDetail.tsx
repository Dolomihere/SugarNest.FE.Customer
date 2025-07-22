import { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { StarRating } from "../../components/StarRating"
import { LikedProduct } from "../../components/LikedProduct"

import type { AddtoCart, ProductOption } from "../../models/CartModel"

import ProductService from "../../services/ProductService"
import CartService from "../../services/CartService"

export function ProductDetailPage() {
  const query = useParams();
  const productId = query.productId ?? "";

  const [images, setImages] = useState<string[]>([]);
  const [mainImg, setMainImg] = useState<string>();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ['productId', productId],
    queryFn: async () => {
      const res = await ProductService.getById(productId);
      setImages(res.data.imgs);
      setMainImg(res.data.imgs[0]);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (cartItem: AddtoCart) => {
      const res = await CartService.addItemToCart(cartItem);
    }
  });

  const handleAddToCart = (quantity: number) => {
    let options: ProductOption[] = [{
      optionGroupId: '',
      optionItemId: ''
    }]

    let item: AddtoCart = {
      note: '',
      productId: productId,
      quantity: quantity,
      productItemOptionModels: options
    }

    console.log(item);
  }

  if (isLoading) return;
  if (!data) return;

  return(
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-wrap -mx-4">

          <div className="w-full md:w-1/2 px-4 mb-8">
            <img src={mainImg} alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
            
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">

              {images.map((img, i) => (
                 <img 
                  key={i}
                  src={img} 
                  alt={`Thumbnail ${i + 1}`} 
                  onClick={() => setMainImg(img)}
                  className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                  mainImg === img ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`} />
              ))}

            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">

            <h2 className="text-3xl font-bold mb-2">{data?.name}</h2>
            <p className="text-gray-600 mb-4">SKU {data?.categoryId}</p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">{new Intl.NumberFormat('vi-VN').format(data?.unitPrice ?? 0)} đ</span>
              {/* <span className="text-gray-500 line-through">$399.99</span> */}
            </div>

            <div className="flex items-center mb-4">

              <StarRating averageRating={data?.averageRatingPoint ?? 0} />

              <span className="ml-2 text-gray-600">{data?.averageRatingPoint} ({data?.ratingCount} lượt đánh giá)</span>

            </div>

            <p className="text-gray-700 mb-6">{data?.description}</p>

            {/* <div className="mb-6">

              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">

                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>

                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>

                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>

              </div>
            </div> */}

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Số lượng:</label>
              <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div> 

            <div className="flex space-x-4 mb-6">
              
              <button 
                onClick={() => handleAddToCart(quantity)}
                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Thêm vào giỏ
              </button>

              <LikedProduct likedProduct={data} />

            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>

              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      
    </div>
  )
}
