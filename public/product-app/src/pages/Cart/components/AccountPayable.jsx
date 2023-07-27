import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 1280px) {
    margin-top: 24px;
  }
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 240px;
  row-gap: 20px;

  @media (max-width: 1280px) {
    margin-top: 24px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubTitle = styled.div`
  width: 65px;
  height: 19px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;

  vertical-align: center;
`;

const NTdollarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PaymentPrefix = styled.div`
  width: 24px;
  height: 19px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #3f3a3a;
`;

const Payment = styled.div`
  width: 67px;
  height: 36px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  color: #3f3a3a;
  margin-left: 8px;
`;

const Split = styled.div`
  width: 240px;
  height: 0px;

  border: 1px solid #3f3a3a;
`;

const Button = styled.button`
  width: 240px;
  height: 64px;

  background-color: #000000;
  color: #ffffff;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  margin-top: 50px;
  @media (max-width: 1280px) {
    width: 100%;
    height: 44px;
    margin-top: 36px;
  }
`;

const AccountPayable = ({totalProdPric, shippingCost}) => {
  // call TPDirect.card.getPrime when user submit form to get tappay prime
  // $('form').on('submit', onSubmit)
  // function onSubmit(event) {
  //   event.preventDefault();
  //   // 取得 TapPay Fields 的 status
  //   const tappayStatus = TPDirect.card.getTappayFieldsStatus();
  //   // 確認是否可以 getPrime
  //   if (tappayStatus.canGetPrime === false) {
  //     alert('can not get prime');
  //     return;
  //   }
  //   // Get prime
  //   TPDirect.card.getPrime(result => {
  //     if (result.status !== 0) {
  //       alert('get prime error ' + result.msg);
  //       return;
  //     }
  //     alert('get prime 成功 ; prime: ' + result.card.prime);
  //     // send prime to your server, to pay with Pay by Prime API .
  //     // Pay By Prime Docs: https://docs.tappaysdk.com/tutorial/zh/back.html#pay-by-prime-api
  //   });
  // }

  return (
    <Wrapper>
      <ColWrapper>
        <RowWrapper>
          <SubTitle>總金額</SubTitle>
          <NTdollarWrapper>
            <PaymentPrefix>NT.</PaymentPrefix>
            <Payment>{totalProdPric}</Payment>
          </NTdollarWrapper>
        </RowWrapper>

        <RowWrapper>
          <SubTitle>運費</SubTitle>
          <NTdollarWrapper>
            <PaymentPrefix>NT.</PaymentPrefix>
            <Payment>{shippingCost}</Payment>
          </NTdollarWrapper>
        </RowWrapper>
        <Split />
        <RowWrapper>
          <SubTitle>應付金額</SubTitle>
          <NTdollarWrapper>
            <PaymentPrefix>NT.</PaymentPrefix>
            <Payment>{totalProdPric + shippingCost}</Payment>
          </NTdollarWrapper>
        </RowWrapper>
      </ColWrapper>
      <Button onclick="onSubmit()">確認付款</Button>
    </Wrapper>
  );
};

export default AccountPayable;
