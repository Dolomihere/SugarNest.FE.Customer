import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

import type { PasswordReset } from "../../models/OtpModel"

import AuthService from "../../services/AuthService"

export function PwdOtp() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') ?? '';
  const otp = searchParams.get('otp') ?? '';

  const changePwd = sessionStorage.getItem('newpassword') ?? '';

  const { mutate, error, isPending } = useMutation({
    mutationFn: async (formdata: PasswordReset) => await AuthService.resetpassword(formdata)
  });

  useEffect(() => {
    const formdata: PasswordReset = {
      email: email,
      otp: otp,
      newPassword: changePwd
    }
    mutate(formdata);
  }, []);

  if (isPending) return <p>Verifying...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;
}
