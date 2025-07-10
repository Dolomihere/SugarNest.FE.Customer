export interface Login {
  userNameOrEmail: string,
  password: string
}

export interface Register {
  email: string, 
  phoneNumber: string,
  fullName: string,
  username: string, 
  password: string, 
  confirmPwd: string
  role: string
}
