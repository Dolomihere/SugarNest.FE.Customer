export interface Login {
  userNameOrEmail: string,
  password: string
}

export interface Register {
  username: string, 
  email: string, 
  password: string, 
  confirmPwd: string
  role: string
}
