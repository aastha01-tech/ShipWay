import React from 'react';
import {BiUserCircle} from 'react-icons/bi'

export default function Header() {
  return (
    <div>
      <div className="row bg-dark">
                <div className="col-sm-10"></div>
                <div className="col-sm-2">
                <BiUserCircle className='text-light fs-3' />
                    <button className='btn btn-danger m-2' >Logout</button>
                </div>
            </div>
    </div>
  )
}
