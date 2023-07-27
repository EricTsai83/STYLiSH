// import {API_HOST} from '../../global/constants';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileFunctionWrapper from '../../components/MobileFunctionWrapper';
import CartTitle from './components/CartTitle';
import CartProdInfoTitle from './components/CartProdInfoTitle';
import CartProdInfoTitleMobile from './components/CartProdInfoTitleMobile';

import CartProdInfo from './components/CartProdInfo';
import CartBuyInfo from './components/CartBuyInfo';
import GarbageCanIcon from './components/GarbageCanIcon';
import CustInfo from './components/CustInfo';
import PayInfo from './components/PayInfo';
import AccountPayable from './components/AccountPayable';
import {v4} from 'uuid'; // 隨機產生 id
import {useState, useEffect} from 'react';

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1160px;
  margin-top: 191px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 148px;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 480px;
    margin-top: 122px;
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 490px;
  @media (max-width: 1280px) {
    margin-bottom: 10px;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  border: 1px solid #979797;
  margin-top: 16px;

  @media (max-width: 1280px) {
    border: none;
    margin-top: 0px;
  }
`;

const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 1280px) {
    row-gap: 20px;
    margin-top: 0px;
    margin-bottom: 27px;
  }
`;

const ProductItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 30px;
  position: relative;

  @media (max-width: 1280px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;
const Split = styled.div`
  @media (max-width: 1280px) {
    width: 100%;
    height: 0px;
    border: 1px solid #3f3a3a;
    margin-bottom: 20px;
  }
`;

const Cart = ({cartNum, setCartNum, cartDataList, setCartDataList}) => {
  const [totalProdPric, setTotalProdPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    let quantitySum = 0;
    let totalProdSum = 0;
    let totalShippingSum = 0;
    cartDataList.forEach(element => {
      quantitySum += Number(element.quantity);
      totalProdSum += Number(element.productSpec.price * element.quantity);

      Number(quantitySum) > 0
        ? (totalShippingSum = 30)
        : (totalShippingSum = 0);
    });

    setCartNum(quantitySum);
    setTotalProdPrice(totalProdSum);
    setShippingCost(totalShippingSum);
  }, [cartDataList, setCartNum, setTotalProdPrice, setShippingCost]);

  return (
    <div>
      <Header cartNum={cartNum} />

      <CartWrapper>
        <TitleWrapper>
          <CartTitle />
          <CartProdInfoTitle />
        </TitleWrapper>

        <ProductWrapper>
          <ProductListWrapper>
            {cartDataList.map((cartData, idx) => {
              const removeProd = () => {
                const buttonId = idx;
                const actionArray = localStorage
                  .getItem('seriesIdArry')
                  .split(',');

                const newArray = actionArray.filter(
                  value => value !== actionArray[buttonId],
                );

                if (newArray.length === 0) {
                  localStorage.removeItem('seriesIdArry');
                } else {
                  localStorage.setItem('seriesIdArry', newArray.join(','));
                }

                let newCartDataList = [];

                cartDataList.forEach((element, idx2) => {
                  if (buttonId !== idx2) {
                    newCartDataList.push(element);
                  }
                });

                const newActionArray = localStorage.getItem('seriesIdArry');
                if (newActionArray === null) {
                  localStorage.clear();
                } else {
                  const newActionArrayList = newActionArray.split(',');

                  for (const key in localStorage) {
                    if (
                      newActionArrayList.includes(key) ||
                      key === 'seriesIdArry'
                    ) {
                    } else {
                      localStorage.removeItem(key);
                    }
                  }
                }

                setCartDataList(newCartDataList);
              };

              const handleSelectChange = event => {
                const itemPos = idx;

                let newCartDataList = [];
                cartDataList.forEach((element, idx2) => {
                  if (itemPos !== idx2) {
                    newCartDataList.push(element);
                  } else {
                    element.quantity = `${event.target.value}`;
                    newCartDataList.push(element);
                  }
                });

                const seriesIdArry = localStorage
                  .getItem('seriesIdArry')
                  .split(',');
                const seriesId = seriesIdArry[idx];
                let seriesObj = localStorage.getItem(seriesId);
                seriesObj = JSON.parse(seriesObj);
                seriesObj.quantity = event.target.value;
                localStorage.setItem(seriesId, JSON.stringify(seriesObj));

                setCartDataList(newCartDataList);
              };

              return (
                <ProductItemWrapper key={v4()}>
                  <Split />
                  <CartProdInfo cartData={cartData} />
                  <CartProdInfoTitleMobile />
                  <CartBuyInfo
                    cartData={cartData}
                    selectedValue={cartData}
                    handleSelectChange={handleSelectChange}
                  />
                  <GarbageCanIcon
                    onClick={removeProd}
                    src={require('../../img/trash.png')}
                  />
                </ProductItemWrapper>
              );
            })}
          </ProductListWrapper>
        </ProductWrapper>

        <CustInfo />

        <PayInfo />

        <AccountPayable
          totalProdPric={totalProdPric}
          shippingCost={shippingCost}
        />
      </CartWrapper>

      <Footer />
      <MobileFunctionWrapper cartNum={cartNum} />
    </div>
  );
};

export default Cart;
