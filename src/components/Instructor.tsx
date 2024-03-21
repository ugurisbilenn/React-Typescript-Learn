import React from 'react'

import {instructorProps} from './PropsTypes';

function Instructor(props:instructorProps) {
  return (
    <div>
      {props.instNameLastName.firstName} {props.instNameLastName.lastName}
    </div>
  )
}

export default Instructor
