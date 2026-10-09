import React, { useState } from 'react'

export const App = () => {
  const data1=[
    {
      id:1,
      name:"Vahob",
      age:18,
      status:true,
    },
    {
      id:2,
      name:"Vahob",
      age:18,
      status:false,
    },
    {
      id:3,
      name:"Vahob",
      age:18,
      status:true,
    },
    {
      id:4,
      name:"Vahob",
      age:18,
      status:false,
    }
  ]
  let [data,setData]= useState(data1)
let [editForm,SetEditForm]=useState(false)
let [addForm,setAddFrom]=useState(false)
  let [editName,setEditName]= useState("")
let [editAge,setEditAge]=useState("")
let [idx,setIdx]=useState(null)
let [search,setSearch]=useState("")
let [status,setStatus]=useState("All")
const handleDelete=(id)=>{
setData(data.filter(el => el.id!=id))
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    let newUser={
      id:Date.now(),
      name:e.target.name.value,
      age:e.target.age.value,
       status:e.target.select.value=="true",
    }
    setData([...data,newUser])
    setAddFrom(false)
   }
   const handleEditSubmit=(e)=>{
    e.preventDefault();
    let newUser={
      id:idx,
      name:e.target.name.value,
      age:e.target.age.value,
    }
     setData(data.map(el => el.id==idx ? newUser : el))
    SetEditForm(false)

   }
  return (
<>
<button className='bg-green-400 p-2 mb-4' onClick={()=> setAddFrom(true)}>Add</button>
<input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search...' className='border ml-5' />
<select value={status} onChange={(e)=> setStatus(e.target.value)} className='ml-2' name="" id="">
  <option value="All">All</option>
  <option value="true">Active</option>
  <option value="false">InActive</option>
</select>
{
  addForm ? <div className='absolute top-30 left-130'>
  <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
   <input className='border-2' type="text" name='name' />
   <input className='border-2' type="text" name='age'/>
   <select name="select" id="">
    <option value="true">Active</option>
    <option value="false">inActive</option>
   </select>
   <button>Submit</button>
  </form>
</div> : null
}
{ editForm ? <div className='absolute top-30 left-130'>
  <form action="" className='flex flex-col gap-2' onSubmit={handleEditSubmit}>
   <input value={editName} onChange={(e)=> {setEditName(e.target.value)}}  className='border-2' type="text" name='name' />
   <input value={editAge} onChange={(e)=> {setEditAge(e.target.value)}}  className='border-2' type="text" name='age'/>
   <button>Submit</button>
  </form>
</div> : console.log("")}
{
  data.filter((el)=>{
  return  el.name.toLowerCase().includes(search.toLowerCase().trim())
  }).filter((el)=>{
    if (status=='All'){return el}
    else if (status=="true"){
      return el.status ==true
    }
    else if (status=="false"){
      return el.status==false
    }
  })
  .map((el)=>{
   return <div className='border-2 w-25 m-2'>
     <h1>{el.name}</h1>
    <p>{el.age}</p>
    <p>{el.status ? "Active" : "InActive"}</p>
    <button onClick={()=> handleDelete(el.id)} className='bg-red-600 text-white p-0.5'>Delete</button>
    <button className='bg-green-600 text-white p-0.5 ml-1' onClick={()=> {
      SetEditForm(true)
       setIdx(el.id)
       setEditName(el.name)
      setEditAge(el.age)
    }}>Edit</button>
   </div>
  })
}
</>
  )
}
