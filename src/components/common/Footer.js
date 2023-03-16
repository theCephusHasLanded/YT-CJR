import React from 'react';
import { CLink } from '@coreui/react';

const Footer = () => {
  return (
    <div>
      <CLink href="https://github.com/theCephusHasLanded/YT-CJR">Our Github Repository</CLink>
      <span>&copy; 2023 An Untamed Glories | LKHN | Rayology Collaboration</span>
      <br />
      <span>Powered by </span>
      <CLink href="https://www.pursuit.org/">Pursuit</CLink>
    </div>
  );
};

export default Footer;
