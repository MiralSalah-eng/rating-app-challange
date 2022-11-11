import React, { useState } from 'react'
import staricon  from "../images/icon-star.svg";
import thankyou from '../images/illustration-thank-you.svg'
const Rating = () => {
  const [rating,setRating]= useState();
  const [chosen,setChosen]=useState(false);
  const [rate,setRate]=useState(false)


  const handleRating = (i)=>{
    setRating(i); 
    setRate(true)   
  }

  const submition = ()=>{
    setChosen(true);
  }
 
  

  return (
  
    <div className='bg-[#131519] w-full h-screen flex justify-center  items-center'>
    {!chosen && 
    (
      <div className='bg-[#1f2730] mx-4 w-96 h-96 rounded-3xl p-8'>

          <div className='w-10 h-10 bg-[#232e36] rounded-full flex justify-center items-center'>
            <img src={staricon} alt="icon"></img>
          </div>

          <div className='text-slate-200 py-5'>
            <h1 className='text-2xl font-bold'>How did we do ?</h1>
            <p className='text-sm text-gray-400 py-2'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
          </div>


          <div className='flex justify-between flex-row'>
                {[1,2,3,4,5].map((i)=>(
                 
                  <div onClick={()=>handleRating(i)} className={"w-12 cursor-pointer h-12 bg-[#232e36] flex justify-center items-center rounded-full group duration-300 'hover:bg-[#7d8898] "} >
                
                  <button className='text-stone-200 group font-semibold'> 
                  {i}
                  </button>
                  </div>

                  
            ))}
            
            </div>
            <button onClick={submition} className="bg-[#fc7412] duration-300 hover:text-[#fc7412] hover:bg-stone-300 w-full h-10 rounded-3xl my-4 text-stone-300 font-bold font-sans">SUBMIT</button> 
            
            {rate&&(<p className='text-sm text-gray-400 text-center' >You Chosen {rating}</p>)}
           
        </div>

    )
    }  
      
      {chosen && 
    (
      <div className='bg-[#1f2730] mx-4  w-96 h-96 rounded-3xl p-10'> 
          <div className='flex flex-col justify-between items-center'>
            <img src={thankyou} alt="thank you"/>
            <div className='h-10 bg-[#272d39] w-2/3 rounded-3xl flex justify-center items-center my-4'>
            <p className='text-[#fc7412] text-sm p-4 opacity-80'>You Selected {rating} from 5</p>
            </div>

            <div className='text-slate-200 py-2 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>Thank You</h1>
            <p className='text-sm text-gray-400 py-2 text-center'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
          </div>
          </div>
      </div>
      
      )}

      
    </div>
  )

}

export default Rating