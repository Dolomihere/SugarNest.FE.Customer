export interface EmailVerify {
  otp: string,
  email: string
}

export interface PasswordReset {
  otp: string,
  email: string,
  newPassword: string
}
