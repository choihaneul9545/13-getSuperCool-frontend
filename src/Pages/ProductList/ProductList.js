import React, { useState, useEffect, useCallback } from "react";
import Nav from "../Components/Nav/Nav";
import Menubar from "./Components/Menubar";
import Product from "./Components/Product/Product";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";

function ProductList() {
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [filteredApplies, setFilteredApplies] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [applyOnOptions, setApplyOnOptions] = useState([]);

  const getCategories = name => {
    const isIncluded = categoryOptions.includes(name);
    isIncluded
      ? setCategoryOptions(
          categoryOptions.filter(selected => selected !== name)
        )
      : setCategoryOptions([...categoryOptions, name]);
  };

  const getApplies = name => {
    const isIncluded = applyOnOptions.includes(name);
    isIncluded
      ? setApplyOnOptions(applyOnOptions.filter(selected => selected !== name))
      : setApplyOnOptions([...applyOnOptions, name]);
  };

  const handleFiltered = useCallback(() => {
    if (!!categoryOptions.length && !applyOnOptions.length) {
      return products.filter(product =>
        categoryOptions.includes(product.category)
      );
    }

    if (!categoryOptions.length && applyOnOptions.length > 0) {
      return products.filter(product => {
        const check = el => applyOnOptions.includes(el);
        return product.apply_on.some(check);
      });
    }

    if (!categoryOptions.length && !applyOnOptions.length) {
      return products;
    }

    return products.filter(product => {
      const isCategoryMatched = categoryOptions.includes(product.category);
      const isApplyMatched = product.apply_on.some(el =>
        applyOnOptions.includes(el)
      );

      return isCategoryMatched && isApplyMatched;
    });
  }, [categoryOptions, applyOnOptions, products]);

  const handleSearchBox = () => {
    setFilteredApplies(
      products.filter(product => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    );
  };

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetch("data/data.json")
      .then(res => res.json())
      .then(res => {
        setProducts(res.product_list);
        setFilteredApplies(res.product_list);
      });
  }, []);

  useEffect(() => {
    setFilteredApplies(handleFiltered());
  }, [applyOnOptions, categoryOptions, handleFiltered]);

  return (
    <Container className="ProductList">
      <Nav isVisible={isVisible} setIsVisible={setIsVisible} />
      <Header>
        <ShopText>SHOP</ShopText>
        <ProductCount>(18 PRODUCT)</ProductCount>
      </Header>
      <MainContainer>
        <Menubar
          getCategories={getCategories}
          getApplies={getApplies}
          handleChange={handleChange}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearchBox={handleSearchBox}
        />
        <ProductsContainer>
          {filteredApplies.map(item => (
            <Product
              item={item}
              setIsVisible={setIsVisible}
              isVisible={isVisible}
            />
          ))}
        </ProductsContainer>
      </MainContainer>
      <div className="photoBox">
        <PhotoBoxImage src="https://i.ibb.co/MPpGLC0/slick-1.jpg" />
      </div>
      <Footer />
    </Container>
  );
}

export default ProductList;

const Container = styled.div``;

const Header = styled.section`
  height: 170px;
  margin: 12% 0 3% 0;
  text-align: center;
`;

const ProductCount = styled.p`
  font-size: 13px;
`;

const ShopText = styled(ProductCount)`
  margin-top: 15vh;
  margin-bottom: 3vh;
  font-size: 80px;
  font-weight: 700;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const PhotoBoxImage = styled.img`
  width: 100vw;
`;
