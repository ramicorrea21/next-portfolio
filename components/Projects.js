import React from 'react';

const Proyects = ({p}) => {
    return (
        <>
            <div className='col-md-4 p-2' id={p.id}>
            <div className='card h-100'>
                <div className='overflow'>
                <img src={`${p.image}`} className='card-img-top' alt="" />
                </div>
                <div className='card-body'>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <a href="#!">Knowmore</a>
                </div>
            </div> 
            </div>
        </>
    );
}

export default Proyects;
