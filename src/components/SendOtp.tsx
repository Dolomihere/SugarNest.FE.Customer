import { useState, useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import type { Enable2fa, EmailVerify, PasswordReset } from "../models/OtpModel"

import AuthService from "../services/AuthService"

export function SendOtp({ email, mode }: { email:string, mode:string }) {
  const goto = useNavigate();

  const [errorMgs, setErrorMgs] = useState<string>('');

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    
  const handleChange = (index: number, value: string) => {

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'enable2fa') {
      const data: Enable2fa = {
        otp: otp.join(''),
        email: email
      }
      mutationOtp.mutate(data);
    }
    else if (mode === 'emailverify') {
      const data: EmailVerify = {
        otp: otp.join(''),
        email: email
      }
      mutationOtp.mutate(data);
    }
    else if (mode === 'resetpassword') {
      const data: PasswordReset = {
        otp: otp.join(''),
        email: email,
        newPassword: sessionStorage.getItem('newpassword') ?? ''
      }
      mutationOtp.mutate(data);
    }
  };

  const resendCode = () => {
    mutationResend.mutate(email);
  };

  const mutationOtp = useMutation({
    mutationFn: async (formdata: any) => {
      if (mode === 'enable2fa') return await AuthService.enable2fa(formdata);
      else if (mode === 'emailverify') return await AuthService.verifyemail(formdata);
      else if (mode === 'resetpassword') return await AuthService.resetpassword(formdata);
    },
    onError: () => {
      setErrorMgs('Lỗi xác thực, thử lại lần sau');
    },
    onSuccess: () => {
      goto('/login');
    }
  });

  const mutationResend = useMutation({
    mutationFn: async (sendMail: string) => {
      if (mode === 'emailverify') return await AuthService.resendverifyemail(sendMail);
      else if (mode === 'resetpassword') return await AuthService.resendresetpassword(sendMail);
    }
  });

  return(
    <div className="h-screen grid place-content-center">
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
        
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Xác nhận mã</h1>
          <p className="text-[15px] text-slate-500">Nhập 6 mã số được gửi đến email của bạn</p>
        </header>

        {errorMgs && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
            {errorMgs}
          </div>
        )}

        <form onSubmit={handleSubmit} id="otp-form" className="mt-8">
          <div className="flex items-center justify-center gap-3">

            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="\d*"
                value={value}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(e, index)}
                ref={el => {inputsRef.current[index] = el;}}
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            ))}

          </div>

          <div className="max-w-[260px] mx-auto mt-4">

            <button 
              type="submit"
              disabled={mutationOtp.isPending}
              className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 cursor-pointer
              ${(mutationOtp.isPending)
                ? 'opacity-50 cursor-not-allowed'
                : ''
              }`}
            >
              Xác thực mã
            </button>
            
          </div>
        </form>

        <div className="text-sm text-slate-500 mt-4">Chưa nhận được mã?{' '}
          <button
            type="button"
            disabled={mutationResend.isPending}
            onClick={() => resendCode()}
            className={`font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer
            ${(mutationOtp.isPending)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            Gửi lại mã
          </button>
        </div>

      </div>
    </div>
  )
}
