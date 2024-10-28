import React, {useEffect, useState} from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {Toaster, toast} from 'sonner';

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