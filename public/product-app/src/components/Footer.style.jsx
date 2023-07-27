import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 115px;
  background-color: #313538;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 206px;
    background-color: #313538;
    padding-bottom: 60px;
  }
`;

export const FooterItemWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 23px;
    margin-bottom: 20px;
    row-gap: 13px;
    width: 296px;
    height: 103px;
    background-color: #313538;
  }
`;

export const FooterLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 380;
  margin-right: 101px;

  @media (max-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    column-gap: 36px;
    width: 177px;
    height: 76px;
    row-gap: 8px;
    margin-right: 31px;
  }
`;

export const FooterNav = styled.a`
  display: inline-block;
  width: 134px;
  height: 22px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-right: 1px solid #828282;
  text-align: center;
  color: #f5f5f5;
  margin-top: 46px;
  margin-bottom: 47px;

  @media (max-width: 1280px) {
    width: 85px;
    height: 20px;
    font-family: 'Noto Sans TC';
    font-size: 14px;
    line-height: 20px;
    border-right: none;
    text-align: left;
    color: #d3d3d3;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const FooterNavWithSmallFontSize = styled.a`
  display: inline-block;
  width: 134px;
  height: 22px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-right: 1px solid #828282;
  text-align: center;
  color: #f5f5f5;
  margin-top: 46px;
  margin-bottom: 47px;

  @media (max-width: 1280px) {
    width: 85px;
    height: 20px;
    font-family: 'Noto Sans TC';
    font-size: 13px;
    line-height: 20px;
    border-right: none;
    text-align: left;
    color: #d3d3d3;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const FooterNavWithoutBorderRight = styled.a`
  display: inline-block;
  width: 134px;
  height: 22px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-right: none;
  text-align: center;
  color: #f5f5f5;
  margin-top: 46px;
  margin-bottom: 47px;

  @media (max-width: 1280px) {
    width: 85px;
    height: 20px;
    font-family: 'Noto Sans TC';
    font-size: 14px;
    line-height: 20px;
    border-right: none;
    text-align: left;
    color: #d3d3d3;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;

  @media (max-width: 1280px) {
    margin-right: 0px;
  }
`;

export const Media = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  margin-top: 33px;
  margin-bottom: 32px;
  @media (max-width: 1280px) {
    width: 20px;
    height: 20px;
    margin-top: 18px;
    margin-bottom: 38px;
    margin-right: 14px;
  }
`;

export const MediaFacebook = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  margin-top: 33px;
  margin-bottom: 32px;
  @media (max-width: 1280px) {
    width: 20px;
    height: 20px;
    margin-top: 18px;
    margin-bottom: 38px;
    margin-right: 0px;
  }
`;

export const Copywrite = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #828282;
  margin-top: 50px;
  margin-bottom: 48px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const MobileCopywrite = styled.div`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #828282;
    margin: 0px;
  }
`;

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
