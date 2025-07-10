import { publicApi } from "../configs/AxiosConfig";

import type { Login, Register } from "../models/FormModel"
import type { Enable2fa, EmailVerify, PasswordReset } from "../models/OtpModel"

const endpoint = '/auth';

const AuthService = {
  register: async (formdata: Register) => {
    const res = await publicApi.post(`${endpoint}/register`, { ...formdata });
    return res.data;
  },
  login: async (formdata: Login) => {
    const res = await publicApi.post(`${endpoint}/login`, { ...formdata });
    return res.data;
  },
  enable2fa: async (formdata: Enable2fa) => {
    const res = await publicApi.post(`${endpoint}/login2fa`, { ...formdata });
    return res.data;
  },
  verifyemail: async (formdata: EmailVerify) => {
    const res = await publicApi.post(`${endpoint}/verify`, { ...formdata });
    return res.data;
  },
  resendverifyemail: async (email: string) => {
    const res = await publicApi.post(`${endpoint}/resend`, { email });
    return res.data;
  },
  resetpassword: async (formdata: PasswordReset) => {
    const res = await publicApi.post(`${endpoint}/reset-password`, { ...formdata });
    return res.data;
  },
  resendresetpassword: async (email: string) => {
    const res = await publicApi.post(`${endpoint}/reset-password/resend`, { email, resetPasswordUrl: "/" });
    return res.data;
  }
}

export default AuthService;
