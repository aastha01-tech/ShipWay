import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const[username,setName] = useState('')
    const[email,setEmail] = useState('')
    const[mobile,setMobile] = useState('')
    const[password,setPassword] = useState('')
    const[c_password,setC_password] = useState('')
    const navigate = useNavigate()
    const register=async()=>{
        console.log({username,email,mobile,password,c_password})
        let result =await fetch('http://localhost:8080/add_user',{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({username,email,mobile,password,c_password})
        })
        result = await result.json()
        window.localStorage.setItem('user',JSON.stringify(result))
        navigate('/login')
    }
  return (
    <div>
      <div className="row">
      <div className="col-sm-6">
            <img src="https://inspiree.review/public/site/images/Inspiree/register-now-1.png" height={400} width={400} style={{marginLeft:"200px"}} alt="image" />
        </div>
        <div className="col-sm-6">
            <form action="" className='register'>
                <h3 style={{textAlign:"center"}}>Register Here</h3><hr/>
                <input type="text" className='form-control input_register' placeholder='Enter Your Name' value={username} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <input type="email" className='form-control input_register' placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                <input type="number" className='form-control input_register' placeholder='Enter Your Number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/>
                <input type="password" className='form-control input_register' placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <input type="password" className='form-control input_register' placeholder='Enter Your Password' value={c_password} onChange={(e)=>{setC_password(e.target.value)}} /><br/>
                <button className='btn btn-success w-100' onClick={register} >Register Now</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}
