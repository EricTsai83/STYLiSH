// import {API_HOST} from '../../global/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileFunctionWrapper from '../../components/MobileFunctionWrapper';
import Product from './components/Product';

// import styled, {css} from 'styled-components';

const ProductDetail = ({cartNum, setCartNum, cartDataList}) => {
  return (
    <div className="Product">
      <Header cartNum={cartNum} />
      <Product setCartNum={setCartNum} cartDataList={cartDataList} />
      <Footer />
      <MobileFunctionWrapper cartNum={cartNum} />
    </div>
  );
};

export default ProductDetail;
