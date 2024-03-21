import React from 'react'

type instructorProps={
    instNameLastName :{
        firstName:string;
        lastName:string;
    }
}

function Instructor(props:instructorProps) {
  return (
    <div>
      {props.instNameLastName.firstName} {props.instNameLastName.lastName}
    </div>
  )
}

export default Instructor
