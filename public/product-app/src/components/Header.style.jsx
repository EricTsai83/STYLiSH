import styled from 'styled-components';
import search from '../img/search.png';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 140px;
  border-bottom: 40px solid #313538;
  background-color: #ffffff;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    border-bottom: none;
    height: 102px;
  }
`;

export const LogoContainer = styled.div`
  margin-top: 26px;
  margin-right: 57px;
  margin-bottom: 26px;
  margin-left: 60px;

  @media (max-width: 1280px) {
    width: 129px;
    height: 24px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;

export const Logo = styled.img`
  width: 258px;
  height: 48px;

  @media (max-width: 1280px) {
    width: 129px;
    height: 24px;
  }
`;

export const MobileSearchBox = styled.div`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    position: absolute;
    top: 6px;
    right: 6px;
    width: 40px;
    height: 40px;
  }
`;

export const MobileInputArea = styled.input`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: center center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    font-family: 'Noto Sans TC';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    position: absolute;
    right: 0;
    border: none;
    padding-right: 10px;
    color: transparent;
    transition: all 0.8s ease;

    &:focus {
      width: calc(100vw - 24px);
      background-position: calc(100vw - 82px) center;
      border: solid 1px #979797;
      outline: none;
      color: #8b572a;
    }
  }
`;

export const MobileInputOverlay = styled.button`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: -1;
  }
`;

export const HeaderItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const MobileHeaderItemWrapper = styled.div`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    background-color: #313538;
    width: 100%;
    height: 50px;
  }
`;

export const MobileHeaderItemList = styled.ul`
  display: none;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const MobileHeaderItem = styled.li`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    flex-grow: 1;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 14px;
    /* typography */
    font-family: 'Noto Sans TC';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    color: #828282;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const Nav = styled.nav`
  width: 450px;
  display: flex;
  flex-direction: row;
  height: 28px;
  margin-top: 44px;
  margin-bottom: 28px;
  justify-content: space-between;
`;

export const NavWithBorder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 20px;
  margin-top: 8px;
  border-left: 1px solid #3f3a3a;
`;

export const NavWithoutBorder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 20px;
  margin-top: 8px;
  border-left: none;
`;

export const WomenDress = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 30px;
  color: #3f3a3a;

  background-color: transparent;
  border: none;
  padding-left: 30px;
  cursor: pointer;

  &:hover {
    color: #8b572a;
  }
`;

export const MenDress = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 30px;
  color: #3f3a3a;

  background-color: transparent;
  border: none;
  padding-left: 30px;
  cursor: pointer;

  &:hover {
    color: #8b572a;
  }
`;

export const Accessories = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 30px;
  color: #3f3a3a;

  background-color: transparent;
  border: none;
  padding-left: 30px;
  cursor: pointer;

  &:hover {
    color: #8b572a;
  }
`;

export const Function = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBox = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 42px;
  background-color: transparent;
  z-index: 1;
  position: relative;
`;

export const InputArea = styled.input`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 160px center;
  width: 214px;
  height: 44px;
  padding: 6px 45px 6px 20px;
  border: 1px solid #979797;
  border-radius: 20px;
  font-family: 'Noto Sans TC';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #8b572a;

  &::placeholder {
    color: #8b572a;
    opacity: 1;
    font-size: 20px;
    word-spacing: 5px;
  }
`;

export const InputOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 160px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

export const CartWrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 42px;
`;

export const CartCount = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  right: 2px;
  top: 20px;
  position: absolute;
  z-index: 2;

  border-radius: 50%;
  padding: 0px 8px;
  background-color: #8b572a;
`;

export const MemberIcon = styled.img`
  width: 44px;
  height: 44px;
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 54px;
`;
