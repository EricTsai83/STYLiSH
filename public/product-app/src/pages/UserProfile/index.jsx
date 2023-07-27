// import {API_HOST} from '../../global/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileFunctionWrapper from '../../components/MobileFunctionWrapper';
import Login from './components/Login';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 1280px) {
  }
`;

const UserProfile = ({cartNum}) => {
  return (
    <Wrapper>
      <Header cartNum={cartNum} />
      <Login />
      <Footer />
      <MobileFunctionWrapper cartNum={cartNum} />
    </Wrapper>
  );
};

export default UserProfile;
