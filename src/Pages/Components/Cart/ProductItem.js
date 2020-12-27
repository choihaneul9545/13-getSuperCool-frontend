import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCart, increment, decrement } from "../../../store/actions";

function ProductItem({ item }) {
  const items = useSelector(store => store.cartReducer);
  const count = useSelector(store => store.countReducer);
  const dispatch = useDispatch();

  const filteredItems = id => {
    const cartItems = items.filter(item => {
      return item.product_id !== id;
    });
    dispatch(deleteCart(cartItems));
  };

  const addCount = () => {
    dispatch(increment());
  };

  const deleteCount = () => {
    if (count.number === 1) {
      alert("최소 선택 수량입니다");
    } else {
      dispatch(decrement());
    }
  };
  const SUM_PRICE = count.number * item.price;
  return (
    <ProductItemContainer>
      <ItemImg src={item.product_image} />
      <ItemDesc>
        <ItemName>{item.name}</ItemName>
        <CountController>
          <ControlBtn onClick={deleteCount}>-</ControlBtn>
          <Count>{count.number}</Count>
          <ControlBtn onClick={addCount}>+</ControlBtn>
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
