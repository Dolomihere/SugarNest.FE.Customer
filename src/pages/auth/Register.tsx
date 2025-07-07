import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

import type { Register } from "../../models/FormModel"

import AuthService from "../../services/AuthService"

export function RegisterPage() {
  const goto = useNavigate();

  const [register, setRegister] = useState<Register>({ username: '', email: '', password: '', confirmPwd: '', role: 'customer' });
  const [errorMgs, setErrorMgs] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMgs('');

    if (!register.username) {
      setErrorMgs('Thiếu tên tài khoản');
      return;
    }

    if (!register.email) {
      setErrorMgs('Thiếu thông tin email');
      return;
    }

    if (!register.password) {
      setErrorMgs('Thiếu mật khẩu');
      return;
    }

    if (register.password !== register.confirmPwd) {
      setErrorMgs('Mật khẩu không trùng với mật khẩu trên')
      return;
    }
    mutation.mutate(register);
  };

  const mutation = useMutation({
    mutationFn: (formdata: Register) => {
      return AuthService.register(formdata);
    },
    onError: () => {
      setErrorMgs('Lỗi đăng kí thử lại lần sau');
    },
    onSuccess: () => {
      sessionStorage.setItem('email', register.email);
      goto('/otp/emailverify');
    }
  });

  return(
    <section className="min-h-dvh bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
          <div className="w-full md:w-1/2">

            <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  <img className="w-8 h-8 mr-2" src="/src/assets/logo.png" alt="logo" />
                  SugarNest
                </a>
                
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Tạo tài khoản mới
                </h1>

                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">

                  {errorMgs && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
                      {errorMgs}
                    </div>
                  )}

                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Họ tên
                    </label>
                    <input
                      type="username"
                      name="username"
                      value={register.username}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={register.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={register.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Xác nhận mật khẩu
                    </label>
                    <input
                      type="password"
                      name="confirmPwd"
                      value={register.confirmPwd}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#93c5fd] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb]"
                      />
                    </div>

                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                        Bằng việc đăng ký, bạn đồng ý với <a className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]" href="#">Điều khoản và chính sách bảo mật</a> của chúng tôi
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    ${(mutation.isPending)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                    }`}
                  >
                    Tạo tài khoản mới
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Đã có tài khoản?{' '} 
                    <Link to="/login" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">
                      Đăng nhập
                    </Link>
                  </p>

                </form>

              </div>
            </div>

          </div>

          <div className="hidden md:block w-1/2">
            <img src="/src/assets/images/sign-up.png" alt="Sign Up" className="object-cover w-full h-full" />
          </div>
        </div>

      </div>
    </section>
  )
}
