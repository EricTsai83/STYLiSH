import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  margin-top: 205px;
  margin-bottom: 49px;
  @media (max-width: 1280px) {
    margin-top: 102px;
    margin-bottom: 32px;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductImgDiv = styled.div`
  width: 100%;
  /* height: 746.67px; */

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;

  @media (max-width: 1280px) {
    height: auto;
    display: block;
    margin: auto;
  }
`;

export const ProductDescWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  margin-left: 40px;

  @media (max-width: 1280px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: 0px;
  }
`;

export const ProductName = styled.div`
  width: 100%;
  height: 38px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 5px;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    height: 24px;

    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3px;
    margin-top: 17px;
  }
`;

export const ProductID = styled.div`
  width: 100%;
  height: 24px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;

  color: #bababa;

  margin-top: 16px;

  @media (max-width: 1280px) {
    height: 19px;

    font-size: 16px;
    line-height: 19px;
    letter-spacing: 3.2px;
  }
`;

export const ProductPrice = styled.div`
  width: 100%;
  height: 36px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  color: #3f3a3a;

  margin-top: 40px;

  @media (max-width: 1280px) {
    height: 24px;

    font-size: 20px;
    line-height: 24px;

    color: #3f3a3a;
  }
`;

export const Split = styled.div`
  width: 100%;
  height: 0px;

  border: 1px solid #3f3a3a;
  margin-top: 20px;
`;

export const ProductColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 36px;

  @media (max-width: 1280px) {
    display: flex;
    justify-content: start;
  }
`;

export const ProductTitle = styled.div`
  width: 68px;
  height: 24px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    width: 62px;
    height: 17px;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.8px;
    display: ${props => props.mobiledisplay};
  }
`;

export const ProductColorItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  margin-left: 28px;

  @media (max-width: 1280px) {
    column-gap: 27px;
    margin-left: 6px;
  }
`;

export const ProductColorItem = styled.div`
  width: 24px;
  height: 24px;

  border: 1px solid #d3d3d3;
  background-color: ${props => props.backgroundcolor};
  outline: ${props => props.outline};
  outline-offset: 6px;
  cursor: pointer;
`;

export const ProductSizeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 36px;
`;

export const ProductSizeItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin-left: 24px;

  @media (max-width: 1280px) {
    column-gap: 15px;
    margin-left: 0px;
  }
`;

export const ProductSizeItem = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: ${props => props.color};

  background-color: ${props => props.backgroundcolor};
  border-radius: 18px;
  cursor: pointer;
`;

export const ProductQuantityWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 22px;
`;

export const ProductQuantitybuttonWrapper = styled.div`
  width: 160px;
  height: 44px;

  border: 1px solid #979797;
  margin-left: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 432px;
    margin-left: 0px;
  }
`;

export const ProductQuantitybutton = styled.div`
  width: 6px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  padding-left: 15px;
  padding-right: 15px;

  color: ${props => props.color};

  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
  cursor: pointer;

  @media (max-width: 1280px) {
    margin-left: 33.46px;
    margin-right: 33.46px;
  }
`;

export const ProductQuantity = styled.span`
  width: 9px;
  height: 32px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  color: ${props => props.color};
  /* color: #8b572a; */

  @media (max-width: 1280px) {
    width: 12px;
    height: 22px;
    font-size: 20px;
    line-height: 22px;
  }
`;

export const AddToCartButton = styled.button`
  width: 360px;
  height: 64px;
  background: #000000;
  border: 1px solid #979797;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  color: #ffffff;
  margin-top: 26px;
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 432px;
    height: 44px;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 3.2px;
  }
`;

export const ProductDescText = styled.div`
  width: 200px;
  height: 240px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  margin-top: 40px;

  @media (max-width: 1280px) {
    width: 140px;
    height: 192px;

    font-size: 14px;
    line-height: 24px;
  }
`;

export const ProductFurtherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const MoreInfoSignWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50.33px;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 28px;
  }
`;

export const MoreInfoSign = styled.div`
  width: 135px;
  height: 30px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2.5px;
  color: #8b572a;

  @media (max-width: 1280px) {
    width: auto;
    min-width: 120px;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`;

export const MoreInfoSplit = styled.div`
  width: 761px;
  height: 0px;

  border: 1px solid #3f3a3a;

  margin-left: 64px;

  @media (max-width: 1280px) {
    width: 100%;

    margin-left: 35px;
  }
`;

export const MoreInfoDesc = styled.div`
  width: 960px;
  height: 60px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #3f3a3a;

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
  }
`;

export const ModelPhoto = styled.img`
  width: 960px;
  height: 540px;

  margin-top: ${props => props.margintop};

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
  }
`;
