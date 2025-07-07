import { useParams } from "react-router-dom"

import { ResetPassword } from "./ResetPassword"

import { SendOtp } from "../../components/SendOtp"

export function OtpPage() {
  const { mode } = useParams();
  const email = sessionStorage.getItem('email') ?? '';

  if (mode === 'emailverify' || mode === 'enable2fa')
    return(
      <SendOtp email={email} mode={mode} />
    )

  if (mode === 'resetpassword')
    return(
      <ResetPassword mode={mode} />
    )
}
