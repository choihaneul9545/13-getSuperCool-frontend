import React, { useState } from "react";
import SearchBox from "./SearchBox";
import styled, { keyframes } from "styled-components";

function Menubar({
  getCategories,
  getApplies,
  handleChange,
  searchInput,
  setSearchInput,
  handleSearchBox
}) {
  const [isActiveAccordion, setIsActiveAccordion] = useState({
    category: true,
    applyOn: true
  });
  // const [color, setColor] = useState(false);
  // const [care, setCare] = useState(false);
  // const [lips, setLips] = useState(false);
  // const [eyes, setEyes] = useState(false);
  // const [face. setFace] = useState(false)
  const [isActiveCategory, setIsActiveCategory] = useState({
    COLOR: false,
    CARE: false,
    LIPS: false,
    EYES: false,
    FACE: false
  });

  const handelClickmenu = (name, category) => {
    if (category === "category") {
      getCategories(name);
    } else if (category === "applies") {
      getApplies(name);
    }
    setSearchInput("");
    setIsActiveCategory({
      ...isActiveCategory,
      [name]: !isActiveCategory[name]
    });
  };

  const handleDefaultCategory = () => {
    setIsActiveCategory({
      COLOR: false,
      CARE: false,
      LIPS: false,
      EYES: false,
      FACE: false
    });
  };

  const handleAccordionMenu = menu => {
    setIsActiveAccordion({
      ...isActiveAccordion,
      [menu]: !isActiveAccordion[menu]
    });
  };

  console.log(isActiveCategory);

  return (
    <Container>
      <SearchBox
        handleChange={handleChange}
        handleDefaultCategory={handleDefaultCategory}
        searchInput={searchInput}
        handleSearchBox={handleSearchBox}
      />
      <CategoryMenu onClick={() => handleAccordionMenu("category")}>
        CATEGORY
      </CategoryMenu>
      <CategoryItemList
        style={{ display: isActiveAccordion.category ? "block" : "none" }}
      >
        <CategoryItem
          onClick={() => handelClickmenu("COLOR", "category")}
          className={isActiveCategory.COLOR ? "clicked" : ""}
        >
          COLOR
        </CategoryItem>
        <CategoryItem
          onClick={() => handelClickmenu("CARE", "category")}
          className={isActiveCategory.CARE ? "clicked" : ""}
        >
          CARE
        </CategoryItem>
      </CategoryItemList>

      <CategoryMenu onClick={() => handleAccordionMenu("applyOn")}>
        APPLY ON
      </CategoryMenu>
      <CategoryItemList
        style={{ display: isActiveAccordion.applyOn ? "block" : "none" }}
      >
        <CategoryItem
          onClick={() => handelClickmenu("LIPS", "applies")}
          className={isActiveCategory.LIPS ? "clicked" : ""}
        >
          LIPS
        </CategoryItem>
        <CategoryItem
          onClick={() => handelClickmenu("EYES", "applies")}
          className={isActiveCategory.EYES ? "clicked" : ""}
        >
          EYES
        </CategoryItem>
        <CategoryItem
          onClick={() => handelClickmenu("FACE", "applies")}
          className={isActiveCategory.FACE ? "clicked" : ""}
        >
          FACE
        </CategoryItem>
      </CategoryItemList>
      <ParagraphContainer>
        <Paragraph> Vegan, clean and lighrweight formulas</Paragraph>
        <Paragraph> made for those who like to keep it </Paragraph>
        <Paragraph> simple yet still have fun. Make them</Paragraph>
        <Paragraph>yours and show us your own unique</Paragraph>
        <Paragraph>routine!</Paragraph>
      </ParagraphContainer>
      <MovingContainer>
        <MovingBox>
          <MovingLine>
            FREE SHIPPING ON ORDERS OVER 34€ · 10% DISCOUNT IF YOU SUBSCRIBE TO
            THE NEWSLETTER
          </MovingLine>
          <MovingLine>
            THE NEWSLETTER · FREE SHIPPING ON ORDERS OVER 34€ · 10% DISCOUNT IF
            YOU SUBSCRIBE ·{" "}
          </MovingLine>
        </MovingBox>
      </MovingContainer>
    </Container>
  );
}

export default Menubar;

const Marquee = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -300%;
  }
`;

const Container = styled.div`
  width: 28vw;
  height: 450px;
  padding: 0 4vw;
  position: sticky;
  top: 10%;
`;

const CategoryMenu = styled.span`
  display: block;
  font-size: 0.8vw;
  margin: 16px 0;
  cursor: pointer;

  &::after {
    content: " -";
  }
`;

const CategoryItemList = styled.ul``;

const CategoryItem = styled.li`
  position: relative;
  width: 50px;
  margin: 5px 0;
  font-size: 1.2vw;
  font-weight: 600;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    background-color: #000;
    width: 0;
    height: 0;
    top: 105%;
    transition: 0.5s ease-in;
  }

  &:hover::before {
    width: 3.8vw;
    height: 1px;
  }
`;

const ParagraphContainer = styled.div`
  margin: 20px 0;
`;

const Paragraph = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.8vw;
  text-transform: lowercase;
`;

const MovingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  overflow: hidden;
  background-color: rgb(255, 232, 0);
`;

const MovingBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 450%;
  height: 16px;
  padding: 0;
  background-color: transparent;
  animation: ${Marquee} 9s linear infinite;
`;

const MovingLine = styled.span`
  display: block;
  float: left;
  padding: 0;
  margin-right: 0;
  padding-right: 0;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
`;
