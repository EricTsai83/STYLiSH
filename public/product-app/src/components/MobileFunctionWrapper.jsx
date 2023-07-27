import {
  MobileFunction,
  MobileCartWrapper,
  MobileCart,
  MobileCartCount,
  MobileCartWrapperText,
  MobileMemberWrapper,
  MobileMemberWrapperText,
  MemberIcon,
} from './MobileFunctionWrapper.style';

import cartMobile from '../img/cart-mobile.png';
import memberMobile from '../img/member-mobile.png';

const MobileFunctionWrapper = ({cartNum}) => {
  return (
    <div>
      <MobileFunction>
        <MobileCartWrapper>
          <MobileCart>
            <a href="/cart">
              <img src={cartMobile} alt="" />
              <MobileCartCount>{cartNum}</MobileCartCount>
            </a>
          </MobileCart>
          <MobileCartWrapperText>購物車</MobileCartWrapperText>
        </MobileCartWrapper>

        <MobileMemberWrapper>
          <a href="/user">
            <MemberIcon src={memberMobile} />
          </a>
          <MobileMemberWrapperText>會員</MobileMemberWrapperText>
        </MobileMemberWrapper>
      </MobileFunction>
    </div>
  );
};

export default MobileFunctionWrapper;
