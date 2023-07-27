import {
  ComponentWrapper,
  ProductWrapper,
  ProductBasicInfoWrapper,
  ProductImgDiv,
  ProductFurtherInfoWrapper,
  ProductImg,
  ProductDescWrapper,
  ProductName,
  ProductID,
  ProductPrice,
  Split,
  ProductColorWrapper,
  ProductTitle,
  ProductColorItemWrapper,
  ProductColorItem,
  ProductSizeWrapper,
  ProductSizeItemWrapper,
  ProductSizeItem,
  ProductQuantityWrapper,
  ProductQuantitybuttonWrapper,
  ProductQuantitybutton,
  ProductQuantity,
  AddToCartButton,
  ProductDescText,
  MoreInfoSign,
  MoreInfoSplit,
  MoreInfoSignWrapper,
  MoreInfoDesc,
  ModelPhoto,
} from './Product.style';
import {v4} from 'uuid'; // 隨機產生 id

import {useState, useEffect} from 'react';

const Product = ({setCartNum, cartDataList}) => {
  // Load the full build.
  var _ = require('lodash');
  // data state
  const [id, setId] = useState();
  // data state
  const [productDetial, setProductDetial] = useState({});
  const [productColor, setProductColor] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productVariant, setProductVariant] = useState({});
  const [zeroStockSize, setZeroStockSize] = useState([]);
  const [diableAddButton, setDiableAddButton] = useState('able');
  const [diableMinusButton, setDiableMinusButton] = useState('diaable');

  // logic state
  const [colorOption, setColorOption] = useState('');
  const [colorName, setColorName] = useState('');
  const [sizeOption, setSizeOption] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let idNumber = searchParams.get('id');
    const API_HOST = 'https://api.appworks-school.tw/api/1.0/products/details';

    const fetchProductData = () => {
      fetch(`${API_HOST}?id=${idNumber}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setProductDetial(data.data);
          setProductColor(data.data.colors);
          setProductSize(data.data.sizes);
          setProductImages(data.data.images);

          // Convert variants data to available data you need
          let zeroStockproductArry = [];
          const variantObj = data.data.variants.reduce((acc, obj) => {
            if (!acc[obj.color_code]) {
              acc[obj.color_code] = {};
            }
            acc[obj.color_code][obj.size] = {stock: obj.stock};

            obj.stock === 0 &&
              zeroStockproductArry.push([obj.color_code, obj.size]);
            return acc;
          }, {});

          setProductVariant(variantObj);
          setZeroStockSize(zeroStockproductArry);
        });
    };

    fetchProductData();
    setId(idNumber);
  }, [id]);

  useEffect(() => {
    // if color option is changed, reset size and quantity
    setSizeOption('');
    setQuantity(0);
  }, [colorOption]);

  useEffect(() => {
    // if size option is changed, reset quantity
    setQuantity(0);
  }, [sizeOption]);

  useEffect(() => {
    if (productVariant && colorOption && sizeOption) {
      const productStock =
        productVariant[colorOption][sizeOption]['stock'] - cartQuantity;
      if (quantity === productStock || sizeOption === '') {
        setDiableAddButton('disable');
      } else {
        setDiableAddButton('enable');
      }
    }

    if (productVariant && colorOption) {
      if (quantity === 0) {
        setDiableMinusButton('disable');
      } else {
        setDiableMinusButton('enable');
      }
    }
  }, [quantity, colorOption, sizeOption, productVariant, cartQuantity]);

  useEffect(() => {
    cartDataList.forEach(cartData => {
      if (
        _.isEqual(cartData.productSpec, {
          productImg: productDetial.main_image,
          title: productDetial.title,
          id: `${productDetial.id}`,
          color: colorName,
          size: sizeOption,
          price: `${productDetial.price}`,
        })
      ) {
        console.log(1);
        setCartQuantity(Number(cartData.quantity));
      }
    });
  }, [sizeOption, cartDataList, _, productDetial, colorName]);

  return (
    <ComponentWrapper>
      <ProductWrapper>
        <ProductBasicInfoWrapper>
          <ProductImgDiv>
            <ProductImg src={productDetial.main_image} />
          </ProductImgDiv>

          <ProductDescWrapper>
            <ProductName>{productDetial.title}</ProductName>
            <ProductID>{productDetial.id}</ProductID>
            <ProductPrice>
              {productDetial.price ? 'TWD.' + productDetial.price : ''}
            </ProductPrice>
            <Split />
            <ProductColorWrapper>
              <ProductTitle mobiledisplay="block">顏色 |</ProductTitle>
              <ProductColorItemWrapper>
                {productColor.map(color => {
                  return (
                    <ProductColorItem
                      key={color.code}
                      backgroundcolor={'#' + color.code}
                      outline={
                        color.code === colorOption ? '#979797 solid 1px' : ''
                      }
                      onClick={() => {
                        if (colorOption === color.code) {
                          setColorOption('');
                        } else {
                          setColorOption(color.code);
                          setColorName(color.name);
                        }
                      }}></ProductColorItem>
                  );
                })}
              </ProductColorItemWrapper>
            </ProductColorWrapper>

            <ProductSizeWrapper>
              <ProductTitle mobiledisplay="block">尺寸 |</ProductTitle>
              <ProductSizeItemWrapper>
                {productSize.map(size => {
                  const checkZeroStock = () => {
                    if (zeroStockSize.length > 0) {
                      return zeroStockSize.every(element => {
                        return (
                          element[0] === colorOption && element[1] === size
                        );
                      });
                    }
                  };
                  return (
                    <ProductSizeItem
                      key={size}
                      backgroundcolor={
                        size === sizeOption
                          ? '#000000'
                          : checkZeroStock()
                          ? 'rgba(236, 236, 236, 0.25)'
                          : '#ECECEC'
                      }
                      color={
                        size === sizeOption
                          ? '#FFFFFF'
                          : checkZeroStock()
                          ? 'rgba(63, 58, 58, 0.25)'
                          : '#3F3A3A'
                      }
                      onClick={() => {
                        if (colorOption === '' || checkZeroStock()) {
                          // pass
                        } else {
                          sizeOption === size
                            ? setSizeOption('') // 解決重覆點選
                            : setSizeOption(size);
                        }
                      }}>
                      {size}
                    </ProductSizeItem>
                  );
                })}
              </ProductSizeItemWrapper>
            </ProductSizeWrapper>

            <ProductQuantityWrapper>
              <ProductTitle mobiledisplay="none">數量 |</ProductTitle>
              <ProductQuantitybuttonWrapper>
                <ProductQuantitybutton
                  marginleft="0px"
                  marginright="39px"
                  color={
                    colorOption === '' || diableMinusButton === 'disable'
                      ? 'rgba(63, 58, 58, 0.25)'
                      : '#000000'
                  }
                  onClick={() => {
                    if (colorOption === '' || sizeOption === '') {
                      // pass
                    } else {
                      setQuantity(prev => Math.max(0, prev - 1));
                    }
                  }}>
                  -
                </ProductQuantitybutton>
                <ProductQuantity color="#8B572A">{quantity}</ProductQuantity>
                <ProductQuantitybutton
                  marginleft="37px"
                  marginright="0px"
                  color={
                    colorOption === '' ||
                    sizeOption === '' ||
                    diableAddButton === 'disable'
                      ? 'rgba(63, 58, 58, 0.25)'
                      : '#000000'
                  }
                  onClick={() => {
                    if (colorOption === '' || sizeOption === '') {
                      // pass
                    } else {
                      if (
                        quantity + 1 >
                        productVariant[colorOption][sizeOption]['stock'] -
                          cartQuantity
                      ) {
                        // pass
                      } else {
                        setQuantity(prev => prev + 1);
                      }
                    }
                  }}>
                  +
                </ProductQuantitybutton>
              </ProductQuantitybuttonWrapper>
            </ProductQuantityWrapper>
            <AddToCartButton
              onClick={() => {
                if (colorName !== '' && sizeOption !== '' && quantity !== 0) {
                  const seriesId = v4();
                  localStorage.setItem(
                    `${seriesId}`,
                    `{"productSpec": {
                        "productImg": "${productDetial.main_image}",
                        "title": "${productDetial.title}",
                        "id": "${productDetial.id}",
                        "color": "${colorName}",
                        "size": "${sizeOption}",
                        "price": "${productDetial.price}"
                      }, 
                      "quantity": "${quantity}",
                      "stock": "${productVariant[colorOption][sizeOption]['stock']}"
                      }`,
                  );

                  if (localStorage.getItem('seriesIdArry') === null) {
                    localStorage.setItem('seriesIdArry', seriesId);
                  } else {
                    const seriesIdArry =
                      seriesId + ',' + localStorage.getItem('seriesIdArry');

                    localStorage.setItem('seriesIdArry', seriesIdArry);
                  }
                  setCartNum(prev => prev + quantity);

                  // console.log(JSON.parse(localStorage.getItem(seriesId)).color);
                  // console.log(localStorage.getItem('seriesIdArry'));
                }
              }}>
              加入購物車
            </AddToCartButton>

            <ProductDescText>
              <pre>
                {productDetial.note}
                {'\n'}
                {'\n'}
                {productDetial.texture}
                {'\n'}
                {productDetial.description}
                {'\n'}
                {'\n'}
                {productDetial.wash ? '清洗：' + productDetial.wash : ''}
                {'\n'}
                {productDetial.place ? '產地：' + productDetial.place : ''}
              </pre>
            </ProductDescText>
          </ProductDescWrapper>
        </ProductBasicInfoWrapper>

        <ProductFurtherInfoWrapper>
          <MoreInfoSignWrapper>
            <MoreInfoSign>更多產品資訊</MoreInfoSign>
            <MoreInfoSplit />
          </MoreInfoSignWrapper>
          <MoreInfoDesc>{productDetial.story}</MoreInfoDesc>
          {productImages.map(imgUrl => {
            return (
              <ModelPhoto key={v4()} src={imgUrl} margintop="30px"></ModelPhoto>
            );
          })}
        </ProductFurtherInfoWrapper>
      </ProductWrapper>
    </ComponentWrapper>
  );
};

export default Product;
