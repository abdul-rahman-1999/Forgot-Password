import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';


function Home() {

    let navigate = useNavigate()

    let logOut = () => {
        localStorage.removeItem("Authorization")
        navigate('/login')
    }

  return <>
  <Button type="submit" sx={{padding:"15px"}} variant="contained" onClick={logOut}>Logout</Button>
  </>
}



export default Home