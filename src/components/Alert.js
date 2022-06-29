import React from 'react'
import '../App.css'

export default function Alert(props) {
    var disType = props.displayType;
  return (
    <div className='alertBox' style={{display: disType,}}>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.text}</strong> 
    </div>
    </div>
  )
}
