import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ForgotPassword() {
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState(false)

  let checkUser = () => {
    const chckUser = {
        email:email,
      }
      fetch("https://forgotpassword.onrender.com/users/forgotPassword",{
        method:"POST",
        body: JSON.stringify(chckUser),
        headers: {
          "Content-Type" : "application/json",
      },
      })
      .then((data) => data.json())
      .then((data) => {console.log(data)
      if(data.msg === "Email Sent Successfully"){
        setMessage(true)
      }else{
        alert("Invalid Credentials")
      }
      })
}
  return <>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
    <p style={{textAlign:"center",margin:0}}>Enter Your Email Id Which you used to Login</p>
  <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
  { message ? <p style={{color:"green",fontWeight:600,textAlign:"center",margin:0}}>Reset Link Sent To Your Email Id</p> : null}
  <Button type="submit" sx={{padding:"15px"}} onClick={checkUser} variant="contained">Send</Button>
  </Box>
  </>
}

export default ForgotPassword