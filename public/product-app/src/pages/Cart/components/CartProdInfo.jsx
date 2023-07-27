import styled from 'styled-components';

const Wrapper = styled.div`
  width: 484px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 16px;
  @media (max-width: 1280px) {
    column-gap: 10px;
  }
`;

const ProdImg = styled.img`
  width: 114px;
  height: 152px;
`;

const ProdDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProdTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 17px;

    color: #000000;
  }
`;

const ProdId = styled.div`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-top: 18px;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const ProdColor = styled.div`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-top: 22px;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const ProdSize = styled.div`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-top: 10px;
  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const CartProdInfo = ({cartData}) => {
  return (
    <Wrapper>
      <ProdImg src={cartData.productSpec.productImg} />
      <ProdDescWrapper>
        <ProdTitle>{cartData.productSpec.title}</ProdTitle>
        <ProdId>{cartData.productSpec.id}</ProdId>
        <ProdColor>顏色｜{cartData.productSpec.color}</ProdColor>
        <ProdSize>尺寸｜{cartData.productSpec.size}</ProdSize>
      </ProdDescWrapper>
    </Wrapper>
  );
};

export default CartProdInfo;
