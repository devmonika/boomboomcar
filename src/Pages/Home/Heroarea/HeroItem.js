import React from 'react';
import './Heroarea.css';

const HeroItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`}  className="carousel-item relative w-full">
                <div className='img-overlay'> 
                    <img src={image} className="w-fit h-4/5 rounded-xl" alt=''/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='font-bold text-6xl text-white'>Affordable <br/> Price For Car <br/> Servicing</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 pera">
                <p>There are many variations of passages of  available, but <br/> the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 hero-btn">
                <button className="btn btn-warning mr-4">Warning</button>
                <button className="btn btn-outline btn-warning">Button</button>
                </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                    </div>



                
        </div> 
    );
};

export default HeroItem;