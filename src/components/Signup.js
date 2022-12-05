import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Signup() {
    let navigate = useNavigate()
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    let addUser = () => {
        const newUser = {
          fullName:fullName,
            email:email,
            password:password,
          }
          fetch("https://forgotpassword.onrender.com/users/signup",{
            method:"POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type" : "application/json",
          },
          })
              .then((data) => data.json())
              .then(() => {
                if((fullName.length < 3) && (email.length < 6) && (password.length < 6)){
                  alert("Please fill the required field")
                }else{
                  navigate('/login')
                }
              })
    }

  return <>
  <h1 style={{textAlign:"center",fontSize:"30px",padding:"20px"}}>Create your Account</h1>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="outlined-basic" type="text" label="FirstName" onChange={(e) => setFullName(e.target.value)} variant="outlined"/>
  <TextField id="outlined-basic" type="text" label="Email" onChange={(e) => setEmail(e.target.value)} variant="outlined"/>
  <TextField id="outlined-basic"   type="password" label="Password" onChange={(e) => setPassword(e.target.value)} variant="outlined"/>
  <Button sx={{padding:"15px"}} variant="contained" onClick={addUser}>Submit</Button>
  <p style={{textAlign:"center"}}>Already have an account <span style={{cursor:"pointer",color:"blue"}} onClick={() => navigate('/login')}>Click here to login</span></p>
  </Box>
  </>

}

export default Signup