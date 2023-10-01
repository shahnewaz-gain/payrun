'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTranslation } from '@/lib/i18next/client';
import { toastAlert } from '@/utils';
import { requestForLogin } from '@/helpers/restApiRequests';

const Login = () => {
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

    try {
      const response = await requestForLogin(mutationData);

      if (response?.status === 200) {
        const { data } = response;
        Cookies.set('accessToken', data?.token, { expires: 7 });
        router.push('/dashboard');
        router.refresh();
      }
    } catch (error) {
      toastAlert('danger', error?.message, 'top-right');
      setLoading(false);
    }
  };

  return (
    <section className="py-5 container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">Sign in</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group mt-2">
              <label htmlFor="password">{t('label.password')}</label>
              <input
                name="password"
                type="password"
                required
                className="form-control"
                placeholder="Password"
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </div>
            <button type="submit" disabled={loading} className="btn mt-4 btn-primary">
              {`${t('label.log_in')} ${loading ? '...' : ''}`}
            </button>
          </form>

          <p className="text-sm text-center mt-3">
            Do not have an account?{' '}
            <span
              role="button"
              tabIndex="0"
              onClick={() => router.push('/registration')}
              className="text-decoration-underline cursor-pointer"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
