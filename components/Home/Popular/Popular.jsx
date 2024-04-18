import React from 'react';
import fun from '../../../assets/fun.avif';
import popular from '../../../json-api/popular.json';

function Popular() {
    return (
        <div className='bg-purple py-5'>
            <div className="container">
                <div className="row">
                    <h4 className="text-center pb-2">POPULAR DESTINATIONS</h4>
                 { 
                 popular.map((item,index)=>{
                    return(
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className="card">
                        <img src={`${item.image.url}`} className="img-top rounded-top" alt={item.image}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.text}</h5>
                            <p className="card-text">{item.text2}</p>
                            <a href="#" className="btn btn-primary">Go Somewhere</a>
                        </div>
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

export default Popular
