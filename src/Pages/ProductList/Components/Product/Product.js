import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logoImg from "./logoText.svg";
import { withRouter } from "react-router-dom";
import { addCart, increment } from "../../../../store/actions";

function Product({ item, setIsVisible, isVisible }) {
  const cartItems = useSelector(store => store.cartReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const AddToCart = () => {
    if (cartItems.includes(item)) {
      dispatch(increment());
    } else {
      dispatch(addCart(item));
      setIsVisible(true);
    }
  };

  return (
    <Container>
      <ProductContainer
        id={item.product_id}
        onClick={() => history.push(`/shop/${item.product_id}`)}
      >
        <ProductThumnail className="productThumnail">
          <ModelImg src={item.model_image} alt={item.model_image} />
          <LogoText className="logoText" src={logoImg} alt="logoImg" />
        </ProductThumnail>
        <LogoIcon
          className="logoIcon"
          src="https://i.ibb.co/wS6dvTj/icontrans.png"
          alt="logoImg"
        />
        <ProductImg
          className="productImg"
          src={item.product_image}
          alt={item.name}
        />

        <ProductDesc>
          <ProductName className="productName">{item.name}</ProductName>
          <ProductPrice>
            {item.price}.00<Price>€</Price>
          </ProductPrice>
        </ProductDesc>
      </ProductContainer>
      <Button onClick={AddToCart}>ADD TO CART</Button>
    </Container>
  );
}

export default withRouter(Product);

const enterMouse = keyframes`
  0% {
    left: 460px;
  }
  100% {
    left: 0px;
  }
`;

const leaveMouse = keyframes`
  0% {
    left: 0px;
  }
  100% {
    left: 460px;
  }
`;

const enterMouseSmile = keyframes`
  0% {
    top: 22%;
    left: 40%;
  }
  100% {
    width: 6vw;
    height: 6vw;
    top: 5%;
    left: 20%;
  }
`;

const leaveMouseSmile = keyframes`
  0% {
    width: 6vw;
    height: 6vw;
    top: 5%;
    left: 20%;
  }
  100% {
    top: 22%;
    left: 40%;
  }
`;

const enterDeg = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(12deg);
  }
`;

const leaveDeg = keyframes`
  0% {
    transform: rotate(12deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 21vw;
  height: 47vh;
  margin-bottom: 5vh;
  margin-right: 4vw;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(247, 247, 247);

  &:hover {
    .productThumnail {
      animation: ${enterMouse} 0.3s ease-out;
      animation-fill-mode: both;
      .logoText {
        left: -2000px;
      }
    }

    .logoIcon {
      animation: ${enterMouseSmile} 0.3s ease-out;
      animation-fill-mode: both;
    }

    .productImg {
      animation: ${enterDeg} 0.2s ease-in;
      animation-fill-mode: both;
    }
    .productName {
      color: #ffe800;
    }
  }
`;

const ProductThumnail = styled.div`
  background-color: rgb(247, 247, 247);
  margin: 0;
  width: 21vw;
  height: 47vh;
  position: relative;
  left: 460px;
  animation: ${leaveMouse} 2s;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const ModelImg = styled.img`
  width: 120%;
  height: 120%;
  position: absolute;
  top: -15%;
  left: -10%;
  transform: scale(1);
  object-fit: cover;
`;

const LogoText = styled.img`
  background-color: transparent;
  position: absolute;
  top: 10%;
  left: -10%;
  height: 300px;
  transition: 6s ease-out;
  animation: infinite;
`;

const LogoIcon = styled.img`
  width: 4.5vw;
  height: 4.5vw;
  background-color: transparent;
  position: absolute;
  top: 22%;
  left: 40%;
  animation: ${leaveMouseSmile} 1s ease-in-out;
`;

const ProductImg = styled.img`
  width: 100%;
  background-color: transparent;
  width: 120px;
  height: 25vh;
  position: absolute;
  transform: rotate(0);
  animation: ${leaveDeg} 0.4s ease-in;
  top: 12%;
  left: 33%;
`;

const ProductDesc = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  margin: 0 25px;
  position: absolute;
  bottom: 10px;
  margin-bottom: 100px;
  transition: color 0.3s ease-out;
`;

const ProductName = styled.div`
  background-color: transparent;
  font-size: 0.9vw;
  font-weight: 500;
  margin: 0;
`;

const ProductPrice = styled(ProductName)`
  background-color: #ffe800;
  line-height: 20px;
  height: 20px;
  width: 50px;
  position: relative;
  transform: rotate(-3.17deg);
  padding-left: 5px;
  margin-right: 13%;
`;

const Price = styled.span`
  position: relative;
  top: -30%;
  right: 0;
  background-color: transparent;
  font-size: 0.7vw;
`;

const Button = styled.button`
  position: absolute;
  left: 1.5vw;
  bottom: 2vh;
  width: 18vw;
  height: 8vh;
  font-size: 0.9vw;
  font-weight: 600;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
