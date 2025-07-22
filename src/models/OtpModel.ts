export interface Enable2fa {
  otp: string,
  email: string,
}

export interface EmailVerify {
  otp: string,
  email: string,
}

export interface PasswordReset {
  otp: string,
  email: string,
  newPassword: string,
}
