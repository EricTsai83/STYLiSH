import styled from 'styled-components';
import {useEffect} from 'react';

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

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Split = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 0px;
  border: 1px solid #3f3a3a;
  margin-top: 16px;

  @media (max-width: 1280px) {
    margin-top: 10px;
  }
`;

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  row-gap: 30px;

  @media (max-width: 1280px) {
    margin-top: 20px;
    row-gap: 20px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (max-width: 1280px) {
    align-items: flex-start;
    flex-direction: column;
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

  @media (max-width: 1280px) {
    width: 70px;
    height: 17px;
    font-size: 14px;
    line-height: 17px;
    color: #3f3a3a;
  }
`;

const Input = styled.input`
  width: 576px;
  height: 32px;
  border: 1px solid #979797;
  border-radius: 8px;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  &::placeholder {
    color: #d3d3d3;
  }

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const PayInfo = () => {
  useEffect(() => {
    const headDom = document.querySelector('head');

    headDom.insertAdjacentHTML = `
    <script src="https://js.tappaysdk.com/sdk/tpdirect/v5.14.0"></script>
    <script>
      TPDirect.setupSDK(
        131772,
        "app_hqXlFLp6TlChHDhwweffEc0fTiGq76d2JWn36oJGjXJLLgYXPG8pTfFiwM6f",
        "sandbox",
      );
    </script>

    <style>
    .tpfield {
        height: 40px;
        width: 300px;
        border: 1px solid gray;
        margin: 5px 0;
        padding: 5px;
    }
    </style>


    <script>
      TPDirect.card.setup({
        // Display ccv field
        let fields = {
            number: {
                // css selector
                element: '#card-number',
                placeholder: '**** **** **** ****'
            },
            expirationDate: {
                // DOM object
                element: document.getElementById('card-expiration-date'),
                placeholder: 'MM / YY'
            },
            ccv: {
                element: '#card-ccv',
                placeholder: 'ccv'
            }
        }
    
        fields: fields,
        styles: {
            // Style all elements
            'input': {
                'color': 'gray'
            },
            // Styling ccv field
            'input.ccv': {
                // 'font-size': '16px'
            },
            // Styling expiration-date field
            'input.expiration-date': {
                // 'font-size': '16px'
            },
            // Styling card-number field
            'input.card-number': {
                // 'font-size': '16px'
            },
            // style focus state
            ':focus': {
                // 'color': 'black'
            },
            // style valid state
            '.valid': {
                'color': 'green'
            },
            // style invalid state
            '.invalid': {
                'color': 'red'
            },
            // Media queries
            // Note that these apply to the iframe, not the root window.
            '@media screen and (max-width: 400px)': {
                'input': {
                    'color': 'orange'
                }
            }
        },
        // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
        isMaskCreditCardNumber: true,
        maskCreditCardNumberRange: {
            beginIndex: 6,
            endIndex: 11
        }
    })



    TPDirect.card.onUpdate(function (update) {
      // update.canGetPrime === true
      // --> you can call TPDirect.card.getPrime()
      if (update.canGetPrime) {
          // Enable submit Button to get prime.
          // submitButton.removeAttribute('disabled')
      } else {
          // Disable submit Button to get prime.
          // submitButton.setAttribute('disabled', true)
      }
  
      // cardTypes = ['mastercard', 'visa', 'jcb', 'amex', 'unionpay','unknown']
      if (update.cardType === 'visa') {
          // Handle card type visa.
      }
  
      // number 欄位是錯誤的
      if (update.status.number === 2) {
          // setNumberFormGroupToError()
      } else if (update.status.number === 0) {
          // setNumberFormGroupToSuccess()
      } else {
          // setNumberFormGroupToNormal()
      }
  
      if (update.status.expiry === 2) {
          // setNumberFormGroupToError()
      } else if (update.status.expiry === 0) {
          // setNumberFormGroupToSuccess()
      } else {
          // setNumberFormGroupToNormal()
      }
  
      if (update.status.ccv === 2) {
          // setNumberFormGroupToError()
      } else if (update.status.ccv === 0) {
          // setNumberFormGroupToSuccess()
      } else {
          // setNumberFormGroupToNormal()
      }
  })
  </script>
  <style>
  /* Bootstrap 的 focus style */
  .tappay-field-focus {
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
  }
  </style>

  <script>
  TPDirect.ccv.setup({
    fields: {
        ccv: {
            element: '#card-ccv',
            placeholder: 'ccv'
        }
    },
    styles: {
        // Style all elements
        'input': {
            'color': 'gray'
        },
        // Styling ccv field
        'input.ccv': {
            // 'font-size': '16px'
        },
        // style focus state
        ':focus': {
            // 'color': 'black'
        },
        // style valid state
        '.valid': {
            'color': 'green'
        },
        // style invalid state
        '.invalid': {
            'color': 'red'
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        '@media screen and (max-width: 400px)': {
            'input': {
                'color': 'orange'
            }
        }
      }
    })
  </script>
  <script>
  TPDirect.ccv.onUpdate((update) => {
    console.log(update)
    })

  // Example Data
  {
    canGetPrime: true
    hasError: false
    status: {
      ccv: 0
    }
  }</script>

  <script>TPDirect.ccv.getPrime((error, response) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(response)
})</script>
  `;
  });
  return (
    <Wrapper>
      <Title>付款資料</Title>
      <Split />
      <ItemListWrapper>
        <ItemWrapper>
          <Subtitle>信用卡號碼</Subtitle>
          <Input
            className="tpfield"
            id="card-number"
            placeholder="**** **** **** ****"
          />
        </ItemWrapper>
        <ItemWrapper>
          <Subtitle>有效期限</Subtitle>
          <Input
            className="tpfield"
            id="card-expiration-date"
            placeholder="MM / YY"
          />
        </ItemWrapper>
        <ItemWrapper>
          <Subtitle>安全碼</Subtitle>
          <Input className="tpfield" id="card-ccv" placeholder="後三碼" />
        </ItemWrapper>
      </ItemListWrapper>
    </Wrapper>
  );
};

export default PayInfo;
