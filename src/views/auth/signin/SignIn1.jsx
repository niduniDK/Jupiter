import React, {useEffect, useState} from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import AuthLogin from './JWTLogin';

const Signin1 = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Delay before starting the animation
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper" >
        <div className="auth-content align-item-center justify-content-center" style={{width: '150%'}}>
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>

          <h1
            style={{
              background: 'linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontSize: '4rem',
              fontWeight: 900,
              letterSpacing: '5px',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '60vh',
              textAlign: 'center',
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 2.5s ease-in-out, transform 2.5s ease-in-out',
            }}
          >
            JUPITER
          </h1>

          <style>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          <Card className="borderless text-center align-item-center justify-content-center" style={{width: '500px', marginLeft:'500px'}}>
            <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <AuthLogin />
              <p className="mb-2 text-muted">
                Forgot password?{' '}
                <NavLink to={'#'} className="f-w-400">
                  Reset
                </NavLink>
              </p>
            </Card.Body> 
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;