import React from 'react';
import { CLink } from '@coreui/react';


const Footer = () => {
  return (
    <div className="footer">
      <CLink href="https://github.com/theCephusHasLanded/YT-CJR">Our Github Repository</CLink>
      <div className="footer__center">
        <span>2023 An Untamed Glories | LKHN | Rayology Collaboration</span>
      </div>
      <div className='footer__left'>
      <span>Powered by</span>
      <CLink href="https://www.pursuit.org/">Pursuit</CLink>
      <a href="https://icons8.com/icon/DI6zcEak7cFp/youtube-logo">YouTube Logo</a> icon by <a href="https://icons8.com">Icons8</a>
      </div>
    </div>
  );
};

export default Footer;
