import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

import type { PasswordReset } from "../../models/OtpModel"

import { SendOtp } from "../../components/SendOtp"

import AuthService from "../../services/AuthService"

export function ResetPassword({ mode } : { mode:string }) {
  const [form, setForm] = useState<PasswordReset>({ otp: '', email: '', newPassword: '' });
  const [errorMgs, setErrorMgs] = useState<string>('');

  const [change, setChange] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('newpassword', form.newPassword);
    mutate.mutate();
  };

  const mutate = useMutation({
    mutationFn: async () => await AuthService.resendresetpassword(form.email),
    onError: () => {
      setErrorMgs('Lỗi, thử lại lần sau');
    },
    onSuccess: () => {
      setChange(true);
    }
  });

  if (change) {
    return (
      <SendOtp email={form.email} mode={mode} />
    )
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">

          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="../src/assets/logo.png" alt="logo" />
            SugarNest
          </a>

          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Đổi mật khẩu
          </h2>

          {errorMgs && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
              {errorMgs}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" id="resetpwd-form">

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ email</label>
              <input 
                type="email" 
                name="email" 
                value={form.email}
                id="email" 
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới</label>
              <input 
                type="password" 
                name="newPassword" 
                value={form.newPassword}
                id="password" 
                placeholder="••••••••" 
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            {/* <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Xác nhận mật khẩu</label>
              <input 
                type="password" 
                name="confirmPwd" 
                value={form.confirmPwd}
                id="confirm-password" 
                placeholder="••••••••" 
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div> */}

            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#93c5fd] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb] dark:ring-offset-gray-800" />
              </div>

              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]" href="#">Terms and Conditions</a></label>
              </div>
            </div> */}

            <button 
              type="submit" 
              className={`w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]
              ${(mutate.isPending)
                ? 'opacity-50 cursor-not-allowed'
                : ''
              }`}
            >
              Đổi mật khẩu
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}
