import React, { useState } from 'react'

export const App = () => {
  const data1=[
    {
      id:1,
      name:"Vahob",
      age:18,

    }
  ]
  let [data,setData]= useState(data1)

const handleDelete=(id)=>{
setData(data.filter(el => el.id!=id))
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    let newUser={
      id:Date.now(),
      name:e.target.name.value,
      age:e.target.age.value,
    }
    setData([...data,newUser])
    
   }
   const EditUser=(e)=>{
    e.preventDefault();
    let newUser={
      id:Date.now(),
      name:e.target.name.value,
      age:e.target.age.value,
    }
    setData([...data,newUser])
    
   }
   let idx=null;
  return (
<>
<div>
  <form action="" onSubmit={handleSubmit}>
   <input type="text" name='name' />
   <input type="text" name='age'/>
   <button>Submit</button>
  </form>
</div>
<div>
  <form action="" className='Edit' onSubmit={handleSubmit}>
   <input type="text" name='name' />
   <input type="text" name='age'/>
   <button>Submit</button>
  </form>
</div>
{
  data.map((el)=>{
   return <div>
     <h1>{el.name}</h1>
    <p>{el.age}</p>
    <button onClick={()=> handleDelete(el.id)}>Delete</button>
    <button onClick={()=> {
       idx=el.id
    }}>Edit</button>
   </div>
  })
}
</>
  )
}
