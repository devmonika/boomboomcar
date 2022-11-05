import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg';

const Login = () => {
    const handleLogin = event =>{
        event.preventdefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-x-20 lg:flex-row">
                <div className="text-center lg:text-left">
                <img src={img} alt="" className='h-96'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button  type='submit' className="btn bg-orange-700">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;