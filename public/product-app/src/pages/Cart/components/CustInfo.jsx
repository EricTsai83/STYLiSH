import styled from 'styled-components';
import {useState} from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1160px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 432px;
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const Split = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 0px;
  border: 1px solid #3f3a3a;
  margin-top: 16px;

  @media (max-width: 1280px) {
    margin-top: 10px;
    max-width: 432px;
  }
`;

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 25px;
  row-gap: 30px;

  @media (max-width: 1280px) {
    max-width: 432px;
    margin-top: 20px;
    row-gap: 20px;
  }
`;

const ItemWrapperWithAlert = styled.div`
  @media (max-width: 1280px) {
    width: 100%;
    max-width: 432px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Subtitle = styled.div`
  width: 120px;
  height: 19px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const Input = styled.input`
  width: 576px;
  height: 32px;
  border: 1px solid #979797;
  border-radius: 8px;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 432px;
    margin-top: 10px;
  }
`;

const Alert = styled.div`
  width: 100%;
  height: 19px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b572a;
  margin-top: 10px;
  text-align: left;
  margin-left: 344px;
  @media (max-width: 1280px) {
    margin-left: 0px;
    margin-top: 6px;
    text-align: left;

    height: 17px;

    font-size: 13px;
    line-height: 17px;

    color: #8b572a;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  column-gap: 32px;

  @media (max-width: 1280px) {
    column-gap: 26px;
    margin-top: 10px;
  }
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #979797;
  margin-right: 8px;
`;

const RadioLabel = styled.label`
  width: 86px;
  height: 26px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3f3a3a;

  @media (max-width: 1280px) {
    width: 75px;
    font-size: 12px;
  }
`;

const CustInfo = () => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [address, setAddress] = useState('');
  const [addressIsValid, setAddressIsValid] = useState(false);

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);

  // const [deliveryTime, setDeliveryTime] = useState('');

  const handleNameChange = event => {
    const nameRegex =
      /^([a-zA-Z]+|[\u4E00-\u9FFF]+)(\s([a-zA-Z]+|[\u4E00-\u9FFF]+))*$/;
    const isValidName = nameRegex.test(event.target.value);
    setName(event.target.value);
    setNameIsValid(isValidName);
  };

  const handlePhoneChange = event => {
    const phoneRegex = /^\d{10}$/;
    const isValidPhone = phoneRegex.test(event.target.value);
    setPhone(event.target.value);
    setPhoneIsValid(isValidPhone);
  };
  const handleAddressChange = event => {
    const addressRegex = /^[a-zA-Z0-9\u4e00-\u9fa5\s,'-]+$/;
    const isValidAddress = addressRegex.test(event.target.value);
    setAddress(event.target.value);
    setAddressIsValid(isValidAddress);
  };

  const handleEmailChange = event => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(event.target.value);
    setEmail(event.target.value);
    setEmailIsValid(isValidEmail);
  };

  // const handleDeliveryTimeChange = event => {
  //   setDeliveryTime(event.target.value);
  // };

  return (
    <Wrapper>
      <Title>訂購資料</Title>
      <Split />
      <ItemListWrapper>
        <ItemWrapperWithAlert>
          <ItemWrapper>
            <Subtitle>收件人姓名</Subtitle>
            <Input value={name} onChange={handleNameChange} />
            {nameIsValid ? (
              <p style={{marginLeft: '10px'}}>✅</p>
            ) : (
              <p style={{color: 'red', marginLeft: '10px'}}>Name is invalid</p>
            )}
          </ItemWrapper>
          <Alert>務必填寫完整收件人姓名，避免包裹無法順利簽收</Alert>
        </ItemWrapperWithAlert>

        <ItemWrapper>
          <Subtitle>手機</Subtitle>
          <Input value={phone} onChange={handlePhoneChange} />
          {phoneIsValid ? (
            <p style={{marginLeft: '10px'}}>✅</p>
          ) : (
            <p style={{color: 'red', marginLeft: '10px'}}>
              Phone number is invalid
            </p>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Subtitle>地址</Subtitle>
          <Input value={address} onChange={handleAddressChange} />
          {addressIsValid ? (
            <p style={{marginLeft: '10px'}}>✅</p>
          ) : (
            <p style={{color: 'red', marginLeft: '10px'}}>Address is invalid</p>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Subtitle>Email</Subtitle>
          <Input value={email} onChange={handleEmailChange} />
          {emailIsValid ? (
            <p style={{marginLeft: '10px'}}>✅</p>
          ) : (
            <p style={{color: 'red', marginLeft: '10px'}}>Email is invalid</p>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Subtitle>配送時間</Subtitle>
          <RadioWrapper onChange={null}>
            <div>
              <RadioInput
                type="radio"
                value="08:00-12:00"
                name="Delivery Time"
              />
              <RadioLabel>08:00-12:00</RadioLabel>
            </div>
            <div>
              <RadioInput
                type="radio"
                value="14:00-18:00"
                name="Delivery Time"
              />
              <RadioLabel>14:00-18:00</RadioLabel>
            </div>
            <div>
              <RadioInput type="radio" value="不指定" name="Delivery Time" />
              <RadioLabel>不指定</RadioLabel>
            </div>
          </RadioWrapper>
        </ItemWrapper>
      </ItemListWrapper>
    </Wrapper>
  );
};

export default CustInfo;
