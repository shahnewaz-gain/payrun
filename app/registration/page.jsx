'use client';

import React, { useState } from 'react';
import { userLogIn } from '@/redux/auth/authSlice';
import { size } from 'lodash';
import { useDispatch } from 'react-redux';
import { toastAlert } from '@/utils';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Registration = () => {
  const [mutationData, setMutationData] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (type, value) => {
    setMutationData((prevData) => ({ ...prevData, [type]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = { ...mutationData };
    delete updatedData.confirmPassword;

    if (size(updatedData)) {
      toastAlert('success', 'Successfully created an account!', 'top-right');
      Cookies.set('accessToken', 'dasdasdasdasd', { expires: 7 });
      dispatch(userLogIn({ accessToken: '', user: { email: mutationData?.email } }));
      router.push('/');
    }
  };

  return (
    <section className="py-5 container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Create Your New Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-control"
                placeholder="Email address"
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-control"
                placeholder="Password"
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                required
                className="form-control"
                placeholder="Confirm password"
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
            </div>

            <button type="submit" className="mt-4 btn btn-primary">
              Create Account
            </button>
          </form>

          <p className="text-sm text-center mt-3">
            Already have an account?{' '}
            <span
              role="button"
              tabIndex="0"
              onClick={() => router.push('/login')}
              className="text-decoration-underline cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
