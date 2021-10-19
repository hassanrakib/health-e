import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './UserAccount.css';

const UserAccount = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from ? location?.state?.from : '/';
    const { setUser, error, setError, createWithEmailAndPassword, logInWithEmailAndPassword, loginWithGoogle, updateUserProfile } = useAuth();
    const [isNew, setIsNew] = useState(false);
    const toogle = () => {
        setError('');
        setIsNew(!isNew);
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (isNew) {
            createWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateUserProfile(data.name)
                        .then(setUser(user));
                })
                .then(() => history.push(redirect_uri))
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        } else {
            logInWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user);
                })
                .then(() => history.push(redirect_uri))
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        }
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
            })
            .then(() => history.push(redirect_uri))
            .catch((error) => {
                setError(error.message);
            });
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
                            <input className='d-block mb-2 w-100 border-1 rounded-1' type='text' {...register("name", { required: true })} />
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
                <p className='border p-2' style={{ cursor: 'pointer' }} onClick={handleLoginWithGoogle}><FontAwesomeIcon icon={faGoogle} className='me-2' />Sign In</p>
            </div>
        </div>
    );
};

export default UserAccount;