import React from 'react';

const Progress = ({skill}) => {
    return (
        <>
            <div className='py-3'>
                <h5>{skill.skill}</h5>
                <div className='progress'>
                    <div
                    className='progress-bar'
                    role='progressbar'
                    style={{width:`${skill.percentage}%`}}
                    >
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progress;
