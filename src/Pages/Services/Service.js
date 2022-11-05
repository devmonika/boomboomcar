import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Service = ({serviceOne}) => {
    const {_id, service_id, title, img, price, description, facility} = serviceOne;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-left">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                
                <div className="card-actions w-full flex justify-between items-center">
                <p className='grow-0 font-semibold'>Price: {price}</p>
                <button className="text-orange-700"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Service;