import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

import type { Login } from "../../models/FormModel"

import AuthService from "../../services/AuthService"

export function LoginPage() {
  const goto = useNavigate();

  const [login, setLogin] = useState<Login>({ userNameOrEmail: sessionStorage.getItem('email') ?? '', password: '' });
  const [remember, setRemember] = useState<boolean>(false);
  const [errorMgs, setErrorMgs] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') setRemember(checked);

    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMgs('');

    if (!login.userNameOrEmail) {
      setErrorMgs('Thiếu thông tin email hoặc người dùng');
      return;
    }

    if (!login.password) {
      setErrorMgs('Thiếu mật khẩu');
      return;
    }
    mutation.mutate(login);
  };

  const mutation = useMutation({
    mutationFn: (formdata: Login) => {
      return AuthService.login(formdata);
    },
    onError: () => {
      setErrorMgs('Lỗi đăng nhập thử lại lần sau');
    },
    onSuccess: (data) => {

      if (remember) {
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      }
      else {
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      }
      goto('/');
    }
  });

  return(
    <section className="bg-gray-50 dark:bg-gray-900">
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
                  Đăng nhập vào tài khoản
                </h1>
                
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">

                  {errorMgs && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
                      {errorMgs}
                    </div>
                  )}

                  <div>
                    <label htmlFor="userNameOrEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email hoặc tên tài khoản
                    </label>
                    <input
                      type="userNameOrEmail"
                      name="userNameOrEmail"
                      value={login.userNameOrEmail}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      onChange={handleChange}
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
                      value={login.password}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          name="remember"
                          type="checkbox"
                          checked={remember}
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#93c5fd] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb]"
                          onChange={() => setRemember(!remember)}
                        />
                      </div>

                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                          Ghi nhớ tôi
                        </label>
                      </div>
                    </div>
                    
                    <a href="#" className="text-sm font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">
                      Quên mật khẩu?
                    </a>
                  </div>

                  <button
                    id="login_btn"
                    type="submit"
                    disabled={mutation.isPending}
                    className={`w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    ${(mutation.isPending)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                    }`}
                  >
                    Đăng nhập
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Chưa có tài khoản?{' '}
                    <Link to="/register" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">
                      Đăng kí
                    </Link>
                  </p>

                </form>

              </div>
            </div>
            
          </div>

          <div className="hidden md:block w-1/2">
            <img src="/src/assets/images/sign-in.png" alt="Login" className="object-cover w-full h-full" />
          </div>
        </div>

      </div>
    </section>
  )
}
