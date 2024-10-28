import React, { useState } from 'react';
import { Card, ListGroup, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChatList from './ChatList';

import avatar1 from '../../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../../assets/images/user/avatar-4.jpg';

const NavRight = () => {
  const [listOpen, setListOpen] = useState(false);
  const navigate = useNavigate();

  const seeProfile = () => {
    console.log("See Profile");
    const user_name = localStorage.getItem('username');
    console.log(user_name);
    navigate('/app/profile', { state: { employee_id: user_name } });
  };

  return (
    <React.Fragment>
      {/* <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">

        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown align={'end'} className="drp-user">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic"> */}
            <a onClick={seeProfile} className="dropdown-item" role="button" style={{ cursor: 'pointer' }}>
              <img
                src={avatar1}
                className="img-radius"
                alt="User Profile"
                style={{ marginBottom: '30px', borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px',position: 'absolute', bottom: '20px', right: '20px', top: '20px' }}
              />
            </a>

            {/* </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="profile-notification">

              <div className="pro-head">

                <span>{localStorage.getItem('username')}</span> */}

                {/* <Link to="/auth/signin-1" className="dud-logout" title="Logout">
                  <i className="feather icon-log-out" />
                </Link>
              </div>  */}

              {/* <ListGroup as="ul" bsPrefix=" " variant="flush" className="pro-body">
                <ListGroup.Item as="li" bsPrefix=" ">
                
                </ListGroup.Item>
              </ListGroup>

            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} /> */}
    </React.Fragment>
  );
};

export default NavRight;
