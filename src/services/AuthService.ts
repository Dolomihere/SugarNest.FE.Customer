import httpClient from "../configs/AxiosConfig"

import type { Login, Register } from "../models/FormModel"
import type { EmailVerify, PasswordReset } from "../models/OtpModel"

const endpoint = '/auth';

const AuthService = {
  register: (formdata: Register) => httpClient.post(`${endpoint}/register`, formdata),
  login: (formdata: Login) => httpClient.post(`${endpoint}/login`, formdata),
  refreshtoken: (token: string) => httpClient.post(`${endpoint}`, token),
  verifyemail: (formdata: EmailVerify) => httpClient.post(`${endpoint}/verify`, formdata),
  resendverifyemail: (email: string) => httpClient.post(`${endpoint}/resend`, email),
  resetpassword: (formdata: PasswordReset) => httpClient.post(`${endpoint}/reset-password`, formdata),
}

export default AuthService;
