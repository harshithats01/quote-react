import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll=()=> {
    const [data,changeData]= useState(
      {
        "quotes":[]
      }
    )
      const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
               
                changeData({quotes:response.data.quotes})
            }
        ).catch(error =>{
          console.error('Error fetching data:',error)
        })
      .finally()
    }
    useEffect(()=> {
      fetchData();
    },[])
  
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="row g-3">

                           {data.quotes.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-title">{value.quote}</p>
                                        <p class="card-title">{value.author}</p>
                                        
                                        

                                       
                                    </div>
                                </div>
                            </div>
                            }
                           )}

                   </div>
                   </div>
                   </div>
                   </div>
                        
                        )
}

                        export default ViewAll