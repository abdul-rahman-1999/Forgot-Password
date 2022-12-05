import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Login() {
    let navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    let loginUser = () => {
      const existingUser = {
          email:email,
          password:password,
        }
        fetch("https://forgotpassword.onrender.com/users/login",{
          method:"POST",
          body: JSON.stringify(existingUser),
          headers: {
            "Content-Type" : "application/json",
        },
        })
            .then((data) => data.json())
            .then(data => {console.log(data)
              if(data){
                localStorage.setItem("Authorization", data.token)
                alert(data.msg)
                if (data.msg === `Login Successfully`) {
                  navigate('/home')
                }else{
                  alert("Invalid Credentials")
                }
              }})
  }

  return <>
    <h1 style={{textAlign:"center",fontSize:"30px",padding:"20px"}}>Login into your Account</h1>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
  <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
  <Button type="submit" sx={{padding:"15px"}} variant="contained" onClick={loginUser}>Submit</Button>
  <p style={{textAlign:"center",margin:0,cursor:"pointer",color:"blue"}} onClick={() => navigate('/forgotPassword')}>Forgot password</p>
  <p style={{textAlign:"center"}}>Don't have an account <span style={{cursor:"pointer",color:"blue"}} onClick={() => navigate('/')}>Click here to SignUp</span></p>
  </Box>
  </>
}

export default Login