import React from "react";
import styled from "styled-components";

function ProductItem() {
  return (
    <ProductItemContainer>
      <ItemImg src="https://cdn.shopify.com/s/files/1/0355/1114/0396/products/superfluid_ott15933_1.jpg?v=1607942621" />
      <ItemDesc>
        <ItemName>OUTLI(N)ER - WHITE</ItemName>
        <CountController>
          <ControlBtn>-</ControlBtn>
          <Count>3</Count>
          <ControlBtn>+</ControlBtn>
        </CountController>
        <Price>14.00</Price>
        <DeleteBtn>delete</DeleteBtn>
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
