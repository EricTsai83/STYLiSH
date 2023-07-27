import {Route, Routes} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import {useState} from 'react';

const App = () => {
  let cartCount = 0;
  let cartProdList;
  let cartProdInfoList = [];
  if (localStorage.getItem('seriesIdArry') === null) {
    // pass
  } else {
    cartProdList = localStorage.getItem('seriesIdArry').split(',');
    let obj;
    cartProdList.forEach(actionHashId => {
      obj = JSON.parse(localStorage.getItem(actionHashId));
      cartCount += Number(
        obj.quantity, // number of total product in cart
      );
      cartProdInfoList.push(obj);
    });
  }

  let cartDataStringList = cartProdInfoList.map(cartData =>
    JSON.stringify(cartData.productSpec),
  );

  let tmpobj = {};
  cartDataStringList.forEach((cartDataString, index) => {
    if (tmpobj[cartDataString]) {
      tmpobj[cartDataString].push(index);
    } else {
      tmpobj[cartDataString] = [index];
    }
  });

  const fn = () => {
    let arry;
    let cartDataListWithoutduplicate = [];
    for (const key in tmpobj) {
      arry = tmpobj[key];
      let totalQuantity = 0;

      arry.forEach(idx => {
        totalQuantity += Number(cartProdInfoList[idx].quantity);
      });
      cartProdInfoList[arry[0]].quantity = totalQuantity;
      cartProdInfoList[arry[0]]['actionIdx'] = arry;
      cartDataListWithoutduplicate.push(cartProdInfoList[arry[0]]);
    }
    return cartDataListWithoutduplicate;
  };
  const cartDataListWithoutduplicate = fn();

  const [cartNum, setCartNum] = useState(cartCount);
  const [cartDataList, setCartDataList] = useState(
    cartDataListWithoutduplicate,
  );
  return (
    <Routes>
      <Route
        path="/product"
        element={
          <ProductDetail
            cartNum={cartNum}
            setCartNum={setCartNum}
            cartDataList={cartDataList}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            cartNum={cartNum}
            setCartNum={setCartNum}
            cartDataList={cartDataList}
            setCartDataList={setCartDataList}
          />
        }
      />
      <Route
        path="/user"
        element={<UserProfile cartNum={cartNum} setCartNum={setCartNum} />}
      />
    </Routes>
  );
};

export default App;
