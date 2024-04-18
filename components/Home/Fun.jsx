import React from 'react';
import './Home.css';  
import fun from '../../json-api/fun.json';

function Fun() {
  return (
    <div className='bg-fun py-4'>
      <div className="container">
         <div className="row">
          <h4 className="text-center mb-4">SOME FUN WE COVER</h4>
          {
            fun.map((item,index)=>{
              return(
                <div className="col-lg-2 col-md-4 col-6">
                <div className="bg-dark p-3 text-center">
                 <i className={`fa ${item.icon} fs-1 fw-bold`} area-hidden = "true"> </i>
               <p className="fw-bold mb-0 mt-3"> {item.p1}</p>
               <p className='mt-0'>{item.p2} </p>
               <button className='btn btn-danger rounded-circle btn-circle'>Search</button>
                </div>
           </div>     
              )
            })
          }
          
         </div>
      </div>
    </div>
  )
}

export default Fun
