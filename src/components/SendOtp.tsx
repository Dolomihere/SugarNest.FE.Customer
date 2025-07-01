import { useState, useRef } from "react"


export function SendOtp() {
  const [errorMgs, setErrorMgs] = useState<string>('');
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  return(
    <div> 

    </div>
  )
}
