import styled from 'styled-components';

const GarbageCanIcon = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 50%;
  right: 0%;
  transform: translate(-100%, -50%);
  margin-right: 30px;

  @media (max-width: 1280px) {
    margin-right: 0px;
    top: 0px;
    right: 0px;
    transform: translate(0%, 20px);
  }
`;

export default GarbageCanIcon;
