import {
  HeaderWrapper,
  LogoContainer,
  Logo,
  MobileSearchBox,
  MobileInputArea,
  MobileInputOverlay,
  HeaderItemWrapper,
  Nav,
  NavWithoutBorder,
  WomenDress,
  NavWithBorder,
  MenDress,
  Accessories,
  Function,
  SearchBox,
  InputArea,
  InputOverlay,
  CartWrapper,
  CartCount,
  MemberIcon,
  MobileHeaderItemWrapper,
  MobileHeaderItemList,
  MobileHeaderItem,
} from './Header.style';

import logo from '../img/logo.png';
import cart from '../img/cart.png';
import member from '../img/member.png';

const Header = ({cartNum}) => {
  return (
    <div>
      <HeaderWrapper>
        <LogoContainer>
          <a href="/home">
            <Logo src={logo} alt="stylish"></Logo>
          </a>
        </LogoContainer>
        <MobileSearchBox>
          <MobileInputArea />
          <MobileInputOverlay></MobileInputOverlay>
        </MobileSearchBox>

        <HeaderItemWrapper>
          <Nav>
            <NavWithoutBorder>
              <WomenDress
                onClick={() => {
                  window.location.href = '/home/?category=women';
                }}>
                女裝
              </WomenDress>
            </NavWithoutBorder>

            <NavWithBorder>
              <MenDress
                onClick={() => {
                  window.location.href = `/home/?category=men`;
                }}>
                男裝
              </MenDress>
            </NavWithBorder>

            <NavWithBorder>
              <Accessories
                onClick={() => {
                  window.location.href = `/home/?category=accessories`;
                }}>
                配件
              </Accessories>
            </NavWithBorder>
          </Nav>

          <Function>
            <SearchBox>
              <InputArea></InputArea>
              <InputOverlay></InputOverlay>
            </SearchBox>

            <CartWrapper>
              <a href="/cart">
                <img className="cart-icon" src={cart} alt="" />
                <CartCount>{cartNum}</CartCount>
              </a>
            </CartWrapper>
            <a href="/user">
              <MemberIcon src={member}></MemberIcon>
            </a>
          </Function>
        </HeaderItemWrapper>

        <MobileHeaderItemWrapper>
          <MobileHeaderItemList>
            <MobileHeaderItem
              onClick={() => {
                window.location.href = `/home/?category=women`;
              }}>
              女裝
            </MobileHeaderItem>
            <MobileHeaderItem
              onClick={() => {
                window.location.href = `/home/?category=men`;
              }}>
              男裝
            </MobileHeaderItem>
            <MobileHeaderItem
              onClick={() => {
                window.location.href = `/home/?category=accessories`;
              }}>
              配件
            </MobileHeaderItem>
          </MobileHeaderItemList>
        </MobileHeaderItemWrapper>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
