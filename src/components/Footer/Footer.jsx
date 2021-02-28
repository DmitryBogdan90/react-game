import React from 'react';
import { Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.scss';
import CourseLogo from '../../assets/rs_school_js.svg';

const GithubLink = () => {
  return (
    <Link href="https://github.com/DmitryBogdan90" color="inherit">
      <GitHubIcon fontSize={'large'} />
    </Link>
  );
};

const Year = () => {
  return <div>2021</div>;
};

const LogoFooter = () => {
  return (
    <Link href="https://rs.school/js/" color="inherit">
      <img src={CourseLogo} alt="" height={50} />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer>
      <GithubLink />
      <Year />
      <LogoFooter />
    </footer>
  );
};

export default Footer;
