import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center my-20'>
                <p className="text-2xl text-orange-700 font-bold">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
                <div className='grid grid-cols-3 ml-6 gap-5'>
                {
                    services.map(serviceOne => <Service key={serviceOne._id} serviceOne={serviceOne}></Service>)
                }
                </div>
                <div className='flex justify-center mt-8'>
                    <button className="btn bg-orange-700 border border-none">More Services</button>
                </div>
            </div>
            
        </div>
    );
};

export default Services;