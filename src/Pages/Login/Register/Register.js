import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-x-20 lg:flex-row">
                <div className="text-center lg:text-left">
                <img src={img} alt="" className='h-96'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignup} className="card-body">
                <h1 className="text-5xl text-center font-bold">Register now!</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button  type='submit' className="btn bg-orange-700">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;