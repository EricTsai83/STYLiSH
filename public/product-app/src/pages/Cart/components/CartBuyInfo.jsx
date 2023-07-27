import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 616px; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 616px;

  @media (max-width: 1280px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

const Quantity = styled.select`
  width: 80px;
  height: 32px;

  background: #f3f3f3;
  border: 1px solid #979797;
  border-radius: 8px;

  margin-right: 56px;

  @media (max-width: 1280px) {
    min-width: 80px;
    margin-left: 12px;
    margin-right: 12px;
    height: 30px;
  }
`;

const QuantityOption = styled.option`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #3f3a3a;
`;

const Price = styled.div`
  width: 192px;
  height: 17px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    width: 104px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #3f3a3a;
  }
`;

const TotalPrice = styled.div`
  width: 192px;
  height: 17px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    width: 104px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #3f3a3a;
  }
`;

const CartBuyInfo = ({cartData, handleSelectChange}) => {
  const emptyArry = () => {
    // create a array of series number
    return Array.apply(null, Array(Number(cartData.stock))).map(function (
      x,
      i,
    ) {
      return i;
    });
  };

  return (
    <Wrapper>
      <Quantity defaultValue={cartData.quantity} onChange={handleSelectChange}>
        {emptyArry().map((_, i) => {
          return <QuantityOption key={i}>{i + 1}</QuantityOption>;
        })}
      </Quantity>
      <Price>TWD.{cartData.productSpec.price}</Price>
      <TotalPrice>
        TWD.{cartData.productSpec.price * cartData.quantity}
      </TotalPrice>
    </Wrapper>
  );
};

export default CartBuyInfo;
