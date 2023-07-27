import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  display: none;
  @media (max-width: 1280px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.div`
  width: 104px;
  height: 17px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #3f3a3a;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const CartProdInfoTitleMobile = () => {
  return (
    <Wrapper>
      <Title>數量</Title>
      <Title>單價</Title>
      <Title>小計</Title>
    </Wrapper>
  );
};

export default CartProdInfoTitleMobile;
