import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import {
  BackgroundDrawer,
  Drawer,
  ProfileDrawerUl,
  SideDrawerSubUl,
  ProfileImage,
  AdminLink,
  ProfileName,
  ProfileRanking,
  SideDrawerUl,
  SideDrawerLi,
  SideDrawerButtonTo,
  SideDrawerLinkTo,
  SideDrawerLinkToAdmin,
  Separator,
  LogoutDiv,
  Logout,
} from '../../../../styled-components/side-drawer.styled-components';

import ProfilePlaceholder from '../../../../static/img/profile-placeholder.png';

const SideDrawer = (props) => {
  const {
    UserData,
  } = props;
  const userInfo = UserData;

  const handleClose = () => {
    const {
      HandleSideDrawer,
    } = props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  };

  const handleLogout = async () => {
    await fetch('https://cryptic-activist-backend.herokuapp.com/auth/logout', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  let ProfileDiv;
  let logoutVar;

  if (!_.isEmpty(userInfo)) {
    const {
      name: displayName,
      profileImage,
    } = userInfo[0];
    ProfileDiv = (
      <>
        <SideDrawerLinkToAdmin to="/profile">
          <ProfileDrawerUl>
            <li
              style={{
                width: '33%',
                transform: 'translateY(-8px)',
              }}
            >
              <ProfileImage
                onClick={handleClose}
                src={profileImage.url}
              />
            </li>
            <li
              style={{
                width: '67%',
                top: '8px',
              }}
            >
              <ProfileName>
                {displayName}
              </ProfileName>
              <ProfileRanking>
                Newbie
              </ProfileRanking>
            </li>
          </ProfileDrawerUl>
        </SideDrawerLinkToAdmin>
      </>
    );
    logoutVar = (
      <>
        <LogoutDiv>
          <Logout
            onClick={handleLogout}
          >
            Log out
          </Logout>
        </LogoutDiv>
      </>
    );
  } else {
    ProfileDiv = (
      <>
        <SideDrawerLinkToAdmin
          to="/login"
          onClick={handleClose}
        >
          <ul>
            <li
              style={{
                listStyle: 'none',
                display: 'inline',
              }}
            >
              <ProfileImage
                src={ProfilePlaceholder}
              />
            </li>
            <li
              style={{
                listStyle: 'none',
                display: 'inline',
              }}
            >
              <ProfileName>
                Login
              </ProfileName>
            </li>
          </ul>
        </SideDrawerLinkToAdmin>
      </>
    );
    logoutVar = (
      <>
      </>
    );
  }

  return (
    <>
      <BackgroundDrawer onClick={handleClose} />
      <Drawer>
        {ProfileDiv}
        <Separator />
        <SideDrawerUl>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-blog"
              aria-controls="expand-blog"
              data-toggle="collapse"
            >
              Blog
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-blog">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-podcasts"
              aria-controls="expand-podcasts"
              data-toggle="collapse"
            >
              Podcasts
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-podcasts">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Podcasts
                </SideDrawerLinkTo>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Categories
                </SideDrawerLinkTo>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Categories
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-courses"
              aria-controls="expand-courses"
              data-toggle="collapse"
            >
              Station
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-courses">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  Home
                </SideDrawerLinkTo>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  Home
                </SideDrawerLinkTo>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  Home
                </SideDrawerLinkTo>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  Home
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
        </SideDrawerUl>
        <AdminLink to="/admin">
          Admin
        </AdminLink>
        {logoutVar}
      </Drawer>
    </>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  HandleSideDrawer: PropTypes.func.isRequired,
  UserData: PropTypes.objectOf(PropTypes.any),
};

SideDrawer.defaultProps = {
  UserData: {},
};
