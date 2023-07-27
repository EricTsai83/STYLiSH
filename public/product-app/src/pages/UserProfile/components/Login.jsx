import styled from 'styled-components';
import {useState, useEffect} from 'react';

import unknownCustImg from '../../../img/unknown_cust.png';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  min-width: 300px;
  max-width: 600px;

  @media (max-width: 1280px) {
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: 0px 0px 9px gray;
  width: 100%;
  height: 400px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustImg = styled.img`
  width: 150px;
`;

const DescTextRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-top: 20px;
`;

const DescTextColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
  margin-top: 20px;
`;

const DescText = styled.p`
  align-items: center;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

const FacebookButton = styled.button`
  width: 300px;
  height: 55px;

  align-items: center;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  background-color: #1877f2;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
`;

const LoginIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  // const accessToken = useRef();

  useEffect(() => {
    loadFacebookSDK();
  }, []);

  // initialize facebook sdk
  function loadFacebookSDK() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1940215823044245',
        cookie: true,
        xfbml: true,
        version: 'v16.0',
      });
      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  // get facebook login respond
  function loginWithFacebook() {
    window.FB.login(
      response => {
        if (response.authResponse) {
          setIsLoggedIn(true);
          // accessToken.current = response.authResponse.accessToken;
          // window.FB.api('/me?fields=id,name,email,picture', response => {
          //   setUserID(response.id);
          //   setName(response.name);
          //   setEmail(response.email);
          //   setPicture(response.picture.data.url);
          // });

          FetchAPI(response.authResponse.accessToken);
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      {scope: 'public_profile,email'},
    );
  }

  function FetchAPI(accessToken) {
    const url = 'https://api.appworks-school.tw/api/1.0/user/signin';
    let headers = {
      'Content-Type': 'application/json',
    };
    let body = {
      provider: 'facebook',
      access_token: accessToken,
    };
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body), // Don't forget convert object to string
    })
      .then(res => res.json())
      .then(data => {
        setUserID(data.data.user.id);
        setName(data.data.user.name);
        data.data.user.email === undefined
          ? setEmail('未提供')
          : setEmail(data.data.user.email);
        setPicture(data.data.user.picture);
      });
  }

  // facebook logout
  function logoutWithFacebook() {
    window.FB.logout(response => {
      setIsLoggedIn(false);
    });
  }

  // layout for login and logout status
  let fbContent;
  if (isLoggedIn) {
    fbContent = (
      <Wrapper>
        <ContentWrapper>
          <ImgWrapper>
            <CustImg src={picture} alt={name} />
          </ImgWrapper>
          <DescTextColWrapper>
            <DescText>1. Welcome {name}</DescText>
            <DescText>2. User ID {userID}</DescText>
            <DescText>3. Email: {email}</DescText>
          </DescTextColWrapper>

          <FacebookButton onClick={logoutWithFacebook}>Logout</FacebookButton>
        </ContentWrapper>
      </Wrapper>
    );
  } else {
    fbContent = (
      <Wrapper>
        <ContentWrapper>
          <ImgWrapper>
            <CustImg src={unknownCustImg} alt="unknown user" />
          </ImgWrapper>
          <DescTextRowWrapper>
            <DescText>1. 解鎖個人化推薦功能</DescText>
            <DescText>2. 獲得會員折扣</DescText>
          </DescTextRowWrapper>
          <FacebookButton onClick={loginWithFacebook}>
            LOGIN WITH FACEBOOK
          </FacebookButton>
        </ContentWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>{fbContent}</div>
    </Wrapper>
  );
};

export default LoginIn;
