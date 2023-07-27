import styled from 'styled-components';

export const MobileFunction = styled.div`
  display: none;

  @media (max-width: 1280px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #313538;
  }
`;

export const MobileCartWrapper = styled.div`
  display: none;

  @media (max-width: 1280px) {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 240px;
  }
`;

export const MobileCartWrapperText = styled.span`
  display: none;

  @media (max-width: 1280px) {
    display: inline-block;
    color: #ffffff;
  }
`;

export const MobileCart = styled.div`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    position: relative;
    width: 44px;
    height: 44px;
  }
`;

export const MobileCartCount = styled.div`
  display: none;

  @media (max-width: 1280px) {
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
  }
`;

export const MobileMemberWrapper = styled.div`
  display: none;

  @media (max-width: 1280px) {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 240px;
    border-left: 1px solid #828282;
  }
`;

export const MobileMemberWrapperText = styled.span`
  display: none;

  @media (max-width: 1280px) {
    display: inline-block;
    color: #ffffff;
  }
`;

export const MemberIcon = styled.img`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    width: 44px;
    height: 44px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
  }
`;
