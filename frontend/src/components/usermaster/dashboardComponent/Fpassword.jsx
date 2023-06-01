import React from 'react';
import { useRef } from 'react';

export default function Fpassword() {
  const emailRef = useRef()
  const send =async()=>{
    var result = await fetch('http://localhost:8080/email',{
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify()
        })
        result = await result.json()
  }
  return (
    <div>
      <input type="email" ref={emailRef} className='form-control' />
      <button className='btn btn-default' onClick={send} >Click</button>
    </div>
  )
}
