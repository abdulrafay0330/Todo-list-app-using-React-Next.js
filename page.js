"use client"
import React, { useState } from 'react';
const page = () => {
  const [title, settitle] = useState("");
  const [decs, setdecs] = useState("");

  // Here we are creating usestate for storing the data 
  const [maintask, setMaintask] = useState([]);

  // ye cheez dekhni hai
  const Submithandler = (e) => {
    e.preventDefault();
    // it is an inbuild method which stops our form from getting submitted
    // spread operator
    setMaintask([...maintask, { title, decs }])
    settitle("");
    setdecs("");
    console.log(maintask);
  }

  const deleteHaandler=(i) =>{
    let copytask = [...maintask]
    // splice is baasically to delete aa perticulaar item from the arry
    // and store tht delete item in other array
    copytask.splice(i,1)
    setMaintask(copytask);

  }

  let renderTask = <h2>No Task Available</h2>
  if (maintask.length>0) {
    // asaync javascript sekhni hai 

    renderTask = maintask.map((t, i) => {
      return (
        <li key={i}className='flex items-center justify-between mb-8'>
          <div className=" w-2/3">
            <p className='text-2xl font-semibold'>{t.title}</p>
            <p className='text-xl font-semibold'>{t.decs}</p>
          </div>
          <button onClick={
            ()=>{
              deleteHaandler(i)
            }
          }
          className='bg-red-400 px-4 py-2 rounded text-white mb-5'>Delete</button>
        </li>
      )
    })
  }

  return (
    // fragments
    <>
      <h1 className='bg-black text-white p-5 text-center font-bold text-xl'>Write Your Day</h1>
      <form onSubmit={Submithandler}>
        <input type="text" className='text-2xl border-black border-4 m-10 px-4 py-2'
          placeholder='Enter your Task Here'
          value={title}
          // onchange dekhna hai or e.target
          onChange={(e) => {
            settitle(e.target.value);
          }}></input>


        <input type="text" className='text-2xl border-black border-4 m-10 px-4 py-2'
          placeholder='Enter Discription Here'
          value={decs}
          onChange={(e) => {
            setdecs(e.target.value);
          }}></input>

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300'>
        {renderTask}
      </div>

    </>
  )
}
export default page;