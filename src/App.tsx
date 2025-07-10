import './App.css'

import queryClient from './configs/ReactQueryConfig'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { RegisterPage } from './pages/auth/Register'
import { LoginPage } from './pages/auth/Login'
import { OtpPage } from './pages/otp/Otp'
import { TestPage } from './pages/Test'
import { CartPage } from './pages/Cart'
import { ProductDetailPage } from './pages/product/ProductDetail'
import { CheckoutPage } from './pages/Checkout'
import { PaymentPage } from './pages/Payment'
import { Review } from './pages/Review'
import { ProductFilterPage } from './pages/product/ProductFilter'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp/:mode" element={<OtpPage />} />
          <Route path="/test" element={<TestPage />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/review" element={<Review />} />
          <Route path="products" element={<ProductFilterPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
