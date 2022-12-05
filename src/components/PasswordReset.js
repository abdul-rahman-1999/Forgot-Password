import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function PasswordReset() {

  const {email,token} = useParams()

  const [password,setPassword] = useState("")
  let navigate=useNavigate()

  let userValid = () => {
    const newPass = {
      password:password,
    }
    fetch(`https://forgotpassword.onrender.com/users/${email}/${token}`,{
      method:"POST",
      body: JSON.stringify(newPass),
      headers: {
        "Content-Type" : "application/json",
    },
    })
    .then((data) => data.json())
    .then((data) => {
      if(data.msg === "Success"){
        alert("New Password Added Successfully")
        navigate('/login')
      }else{
        alert("Please Enter Your New Password")
      }
    })
  }

  return <>
  <h1 style={{textAlign:"center",fontSize:"30px",padding:"20px"}}>Enter Your New Password</h1>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="outlined-basic" label="New Password" onChange={(e) => setPassword(e.target.value)} variant="outlined"/>
  <Button type="submit" sx={{padding:"15px"}} variant="contained" onClick={userValid}>Reset</Button>
  </Box>
  </>
}

export default PasswordReset