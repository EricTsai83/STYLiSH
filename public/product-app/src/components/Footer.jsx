import {
  FooterWrapper,
  FooterItemWrapper,
  FooterLink,
  FooterNavWithSmallFontSize,
  FooterNav,
  FooterNavWithoutBorderRight,
  MediaWrapper,
  Media,
  MediaFacebook,
  Copywrite,
  MobileCopywrite,
  MobileFunction,
} from './Footer.style';

import line from '../img/line.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <FooterItemWrapper>
          <FooterLink>
            <FooterNavWithSmallFontSize href="">
              關於 STYLiSH
            </FooterNavWithSmallFontSize>
            <FooterNav href="">服務條款</FooterNav>
            <FooterNav href="">隱私政策</FooterNav>
            <FooterNav href="">聯絡我們</FooterNav>
            <FooterNavWithoutBorderRight href="">
              FAQ
            </FooterNavWithoutBorderRight>
          </FooterLink>

          <MediaWrapper>
            <Media src={line} alt="" />
            <Media src={twitter} alt="" />
            <MediaFacebook src={facebook} alt="" />
            <Copywrite>© 2018. All rights reserved.</Copywrite>
          </MediaWrapper>

          <MobileCopywrite>
            <p>© 2018. All rights reserved.</p>
          </MobileCopywrite>
        </FooterItemWrapper>
      </FooterWrapper>

      <MobileFunction></MobileFunction>
    </div>
  );
};

export default Footer;
