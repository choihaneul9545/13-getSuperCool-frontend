import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductItem from "./ProductItem";

function Cart({ isVisible, setIsVisible }) {
  const cartItems = useSelector(store => store.cartReducer);

  return (
    <Container isVisible={isVisible}>
      <Header>
        <HeaderText>
          <CartText>Your Cart</CartText>
          <CartAmount>({cartItems.length})</CartAmount>
        </HeaderText>
        <CloseBtn onClick={() => setIsVisible(false)}>
          <CloseCart alt="close" src="https://i.ibb.co/C7Zh1zK/close.png" />
        </CloseBtn>
      </Header>
      <CartContainer>
        {cartItems ? (
          <ProductItemsList>
            {cartItems?.map(item => (
              <ProductItem item={item} />
            ))}
          </ProductItemsList>
        ) : (
          <CartEmptyText>
            your
            <br />
            cart is
            <br />
            empty
          </CartEmptyText>
        )}

        <GoToCartBtn>go back to shopping</GoToCartBtn>
      </CartContainer>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5.7vh 4.5vw;
  width: 50vw;
  height: 100vh;
  background-color: #ffe800;
  z-index: 99;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5vh;
  background-color: transparent;
  border-bottom: 3px solid black;
`;

const HeaderText = styled.div`
  display: flex;
  background-color: transparent;
`;

const CartText = styled.div`
  font-size: 46px;
  font-weight: 700;
  text-transform: none;
  background-color: transparent;
`;

const CartAmount = styled(CartText)`
  margin-left: 1.5vw;
  background-color: transparent;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const CloseCart = styled.img`
  width: 18px;
  height: 18px;
  background-color: transparent;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: transparent;
`;

const ProductItemsList = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const CartEmptyText = styled.div`
  font-size: 7vw;
  font-weight: 700;
  line-height: 84%;
  text-align: center;
  background-color: transparent;
`;

const GoToCartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7vh;
  margin-top: 2vh;
  font-weight: 600;
  background-color: black;
  color: white;
`;
