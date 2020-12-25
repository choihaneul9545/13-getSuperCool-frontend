import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Cart from "../Cart/Cart";
import styled from "styled-components";

function Nav({ isVisible, setIsVisible }) {
  const cartItems = useSelector(store => store.cartReducer);

  return (
    <Container>
      <Cart isVisible={isVisible} setIsVisible={setIsVisible} />
      <LinkItem className="link" to={"/"}>
        <Logo />
      </LinkItem>
      <NavCenter>
        <LinkItem className="link" to={"/shop"}>
          <NavCenterText>SHOP</NavCenterText>
        </LinkItem>
        <NavCenterText>ABOUT</NavCenterText>
      </NavCenter>
      <NavRight>
        <CountryOptions dir="rtl" id="lang-select">
          <option value="EUROPE">EUROPE</option>
          <option value="ITALY">ITALY</option>
          <option value="SPAIN">SPAIN</option>
          <option value="UNITED KINGDOM">UNITED KINGDOM</option>
        </CountryOptions>
        <label for="lang-select" aria-label="select language"></label>
        <SvgItem viewBox="0 0 11 6" class="Icon__StyledSvg-sc-10qpb8y-0 dzeaZG">
          <path d="M10.568 2.89022L10.568 0.586218L5.576 3.22622L0.536 0.586218L0.536 2.89022L5.576 5.74622L10.568 2.89022Z"></path>
        </SvgItem>
        <CartText>CART</CartText>
        <CircleItem onClick={() => setIsVisible(true)}>
          <Circle></Circle>
          <CircleSvg
            viewBox="0 0 307.772 354.263"
            class="Icon__StyledSvg-sc-10qpb8y-0 cWnymm bag"
          >
            <path
              d="M270.491,301.857,252.006,77.695a9.5,9.5,0,0,0-9.451-8.511H196.948v-10.4a58.786,58.786,0,0,0-117.573,0v10.4H33.767a9.5,9.5,0,0,0-9.451,8.511L.051,308.77A9.5,9.5,0,0,0,9.5,319.263H266.818c2.694,0,3.607-1.142,5.407-3.142s-1.454-11.587-1.735-14.264ZM98.379,58.786a39.782,39.782,0,0,1,79.565,0v10.4H98.379ZM20.054,300.26,42.325,88.188H79.375v20.94a9.5,9.5,0,1,0,19,0V88.188h79.565v20.94a9.5,9.5,0,0,0,19,0V88.188H234l22.27,212.072Zm0,0"
              transform="translate(17.522 17.5)"
              stroke-width="35"
            ></path>
          </CircleSvg>
          <CartCount>{cartItems.length}</CartCount>
        </CircleItem>
        <CircleItem>
          <LinkItem to={"/LoginRegister"}>
            <Circle></Circle>
          </LinkItem>
          <LinkItem to={"/LoginRegister"}>
            <CircleSvg
              id="userIcon"
              viewBox="0 0 13 13"
              class="Icon__StyledSvg-sc-10qpb8y-0 kopxmH"
            >
              <path d="M9.24857 6.19357C9.84286 5.53429 10.2143 4.67071 10.2143 3.71429C10.2143 1.66214 8.55214 0 6.5 0C4.44786 0 2.78571 1.66214 2.78571 3.71429C2.78571 4.67071 3.15714 5.53429 3.75143 6.19357C1.54143 7.22429 0 9.47143 0 12.0714V13H13V12.0714C13 9.47143 11.4586 7.22429 9.24857 6.19357ZM4.64286 3.71429C4.64286 2.69286 5.47857 1.85714 6.5 1.85714C7.52143 1.85714 8.35714 2.69286 8.35714 3.71429C8.35714 4.73571 7.52143 5.57143 6.5 5.57143C5.47857 5.57143 4.64286 4.73571 4.64286 3.71429ZM1.95 11.1429C2.37714 9.02571 4.26214 7.42857 6.5 7.42857C8.73786 7.42857 10.6136 9.02571 11.05 11.1429H1.95Z"></path>
            </CircleSvg>
          </LinkItem>
        </CircleItem>
      </NavRight>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 6.94vw;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 5vw;
`;

const LinkItem = styled(Link)`
  background-color: transparent;
  color: black;
`;

const NavCenter = styled.div`
  display: flex;
  font-size: 1.2vw;
  line-height: 2.01vw;
  background-color: #ffe800;
  position: absolute;
  left: 45%;
`;

const NavCenterText = styled.span`
  display: inline-block;
  padding: 0 9px;
  position: relative;
  font-weight: bold;
  background-color: transparent;
  z-index: 1;

  &:hover {
    color: #ffe800;
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }

  &::after {
    background-color: black;
    display: block;
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s ease;
  }
`;

const NavRight = styled.div`
  font-weight: bold;
  font-size: 0.9vw;
  line-height: 2.32vw;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const CountryOptions = styled.select`
  font-size: 0.9vw;
  -webkit-appearance: none;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const SvgItem = styled.svg`
  width: 0.8vw;
  height: 0.8vw;
  background-color: transparent;
`;

const CartText = styled.p`
  padding: 0 0.5vw;
  cursor: pointer;
  background-color: transparent;
`;

const CircleItem = styled.div`
  position: relative;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Circle = styled.div`
  width: 2.6vw;
  height: 2.6vw;
  border-radius: 50%;
  background: #ffe800;
  margin: 0 3px;
`;

const CircleSvg = styled(SvgItem)`
  position: absolute;
  top: 28%;
  left: 32%;
  width: 1vw;
  height: 1vw;
  fill: black;
`;

const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -2px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: black;
  font-size: 11px;
  color: white;
  font-weight: 800;
`;
