import React from 'react';

const Education = ({ed, index}) => {
    return (
        <>
            <li className='fs-5 pt-1 ' key={index} id={ed.id} >
            <h3>{ed.name} in {ed.where}. {ed.date}</h3>
            <p>{ed.knowledge}</p>
            </li>
        </>
    );
}

export default Education;
