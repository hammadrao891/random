import { Button } from 'bootstrap'
import React from 'react'

const CC = () => {
  return (
    <div>
      <h1>Notes Application</h1>
      <h4>CC LAB Mid by Hammad Rao</h4>
      <textarea rows="6" cols="16" placeholder='Add a note'/>
      <button className='btn btn-success'>Add a note</button>
      <br/>
      <h3>Your Notes:</h3>
      <h6>My first Day</h6>
      <p>blah blah blha blah</p>
      <button className='btn btn-danger'>Delete</button>
      <h6>My Second Day</h6>
      <p>blah blah blha blah</p>
      <button className='btn btn-danger'>Delete</button>
      <h6>My Third Day</h6>
      <p>blah blah blha blah</p>
      <button className='btn btn-danger'>Delete</button>
      <h6>My Fourth Day</h6>
      <p>blah blah blha blah</p>

    
    </div>
  )
}

export default CC
