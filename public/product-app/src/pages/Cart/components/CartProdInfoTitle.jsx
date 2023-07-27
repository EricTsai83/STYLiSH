import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 160px;
  @media (max-width: 1280px) {
    display: none;
  }
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.p`
  width: 32px;
  height: 19px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #3f3a3a;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const CartProdInfoTitle = () => {
  return (
    <Wrapper>
      <Title>數量</Title>
      <Title>單價</Title>
      <Title>小計</Title>
    </Wrapper>
  );
};

export default CartProdInfoTitle;
