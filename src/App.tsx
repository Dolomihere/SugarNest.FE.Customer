import './App.css'

import queryClient from './configs/ReactQueryConfig'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { RegisterPage } from './pages/Register'
import { LoginPage } from './pages/Login'
import { OtpPage } from './pages/Otp'
import { TestPage } from './pages/Test'


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
        

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
