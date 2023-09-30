'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import withRoutingMiddleware from '@/components/middlewares/withRoutingMiddleware';
import { toastAlert } from '@/utils';
import { requestForRegister } from '@/helpers/restApiRequests';
import { useTranslation } from '@/lib/i18next/client';

const Registration = () => {
  const { t } = useTranslation();
  const [mutationData, setMutationData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (type, value) => {
    setMutationData((prevData) => ({ ...prevData, [type]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = { ...mutationData };
    delete updatedData.confirmPassword;

    try {
      const response = await requestForRegister(updatedData);
      if (response?.status === 200) {
        toastAlert('success', t('action.successfully_created_account'), 'top-right');
        setLoading(false);
        router.push('/login');
      }
    } catch (error) {
      toastAlert('danger', error?.message, 'top-right');
      setLoading(false);
    }
  };

  const isSameConfirmPassWithPass = mutationData?.password === mutationData?.confirmPassword;
  const disableBtn = !isSameConfirmPassWithPass || loading;

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
                name="name"
                type="text"
                required
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="email-address">Email address</label>
              <input
                name="email"
                type="email"
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
                required
                className="form-control"
                placeholder="Confirm password"
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
              {mutationData.password &&
                mutationData.confirmPassword &&
                !isSameConfirmPassWithPass && (
                  <span className="form-text text-danger">Password does not match!</span>
                )}
            </div>

            <button type="submit" disabled={disableBtn} className="mt-4 btn btn-primary">
              {`${t('label.sign_up')} ${loading ? '...' : ''}`}
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
              {t('label.log_in')}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default withRoutingMiddleware(Registration);
