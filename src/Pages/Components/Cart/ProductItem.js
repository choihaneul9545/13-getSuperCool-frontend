import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCart, plusCount, minusCount } from "../../../store/actions";

function ProductItem({ item }) {
  const items = useSelector(store => store.cartReducer);
  const dispatch = useDispatch();

  const filteredItems = id => {
    const cartItems = items.filter(item => {
      return item.product_id !== id;
    });
    dispatch(deleteCart(cartItems));
  };

  const handlePlusCount = id => {
    const plusResult = items.map(item => {
      if (item.product_id === id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    dispatch(plusCount(plusResult));
  };

  const handleMinusCount = id => {
    if (item.quantity === 1) {
      alert("최소 선택 수량입니다");
    } else {
      const MinusResult = items.map(item => {
        if (item.product_id === id)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      dispatch(plusCount(MinusResult));
    }
  };

  const SUM_PRICE = item.quantity * item.price;

  return (
    <ProductItemContainer>
      <ItemImg src={item.product_image} />
      <ItemDesc>
        <ItemName>{item.name}</ItemName>
        <CountController>
          <ControlBtn onClick={() => handleMinusCount(item.product_id)}>
            -
          </ControlBtn>
          <Count>{item.quantity}</Count>
          <ControlBtn onClick={() => handlePlusCount(item.product_id)}>
            +
          </ControlBtn>
        </CountController>
        <Price>{SUM_PRICE}.00€</Price>
        <DeleteBtn onClick={() => filteredItems(item.product_id)}>
          delete
        </DeleteBtn>
      </ItemDesc>
    </ProductItemContainer>
  );
}

export default ProductItem;

const ProductItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5vh 0;
  border-bottom: 1px solid black;
  background-color: transparent;
`;

const ItemImg = styled.img`
  width: 4vw;
  height: 10vh;
  margin-right: 2vw;
`;

const ItemDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
`;

const ItemName = styled.h2`
  display: flex;
  align-items: center;
  width: 8vw;
  background-color: transparent;
`;

const CountController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8vw;
  background-color: transparent;
`;

const ControlBtn = styled.button`
  background-color: transparent;
  padding: 1vh;
  cursor: pointer;
`;

const Count = styled.div`
  padding: 0.5vh 0.5vw;
  border: 1px solid #e5d006;
  background-color: transparent;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const DeleteBtn = styled.button`
  width: 7vw;
  background-color: transparent;
`;
