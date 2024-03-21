import React from 'react'

type instructorListType = {
    instNameLastNameList: {
        firstName: string;
        lastName: string
    }[];
};

function InstructorList(props: instructorListType) {
  return (
    <div>
      {props.instNameLastNameList.map(item => {
        return (
            <h3>{item.firstName} {item.lastName}</h3>
        );
      })}
    </div>
  );
}

export default InstructorList
