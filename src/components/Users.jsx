import React from 'react'

const Users = ({name,age}) => {
  return (
    <>
    <h1>{name}</h1>
    <p>{age}</p>
    <button>Delete</button>
    </>
  )
}

export default Users