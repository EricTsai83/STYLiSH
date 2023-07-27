import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  width: 48px;
  height: 19px;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const CartTitle = () => {
  return (
    <Wrapper>
      <Title>購物車</Title>
    </Wrapper>
  );
};

export default CartTitle;
