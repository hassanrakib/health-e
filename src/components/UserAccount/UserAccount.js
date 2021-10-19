import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './UserAccount.css';

const UserAccount = () => {
    const { error, setError, createWithEmailAndPassword, logInWithEmailAndPassword, loginWithGoogle } = useAuth();
    const [isNew, setIsNew] = useState(false);
    const toogle = () => {
        setError('');
        setIsNew(!isNew);
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (isNew) {
            createWithEmailAndPassword(data.displayName, data.email, data.password);
        } else {
            logInWithEmailAndPassword(data.email, data.password);
        }
    }
    return (
        <div className='user-account d-flex flex-column align-items-center'>
            <div className='bg-white p-5'>
                <h2 className='text-center mb-5'>
                    {
                        isNew ? 'Create Your Account' : 'Login to Your Account'
                    }
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        isNew &&
                        <div>
                            <label>Full Name:</label>
                            <input className='d-block mb-2 w-100 border-1 rounded-1' type='text' {...register("displayName", { required: true })} />
                        </div>
                    }
                    <label>Email:</label>
                    <input className='d-block mb-2 w-100 rounded-1 border-1' type='email' {...register("email", { required: true })} />
                    <label>Password:</label>
                    <input className='d-block mb-2 w-100 rounded-1 border-1' type='password' {...register("password", { required: true })} />
                    <input type="submit" value={isNew ? 'Register' : 'Login'} className='bg-dark border-0 text-white px-4 py-2 rounded' />
                </form>
                <p className='text-danger'>{error}</p>
                <p className='mt-2 text-decoration-underline' style={{ cursor: 'pointer' }} onClick={toogle}>{isNew ? 'Registered' : 'New'} in Health-<span className='text-primary fw-bold'>E</span>?</p>
                <hr />
                <p className='border p-2' style={{ cursor: 'pointer' }} onClick={loginWithGoogle}><FontAwesomeIcon icon={faGoogle} className='me-2' />Sign In</p>
            </div>
        </div>
    );
};

export default UserAccount;