import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import Menubar from "./Components/Menubar";
import Product from "./Components/Product/Product";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";

function ProductList() {
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredApplies, setFilteredApplies] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [applyOnOptions, setApplyOnOptions] = useState([]);

  const handleFiltered = () => {
    if (categoryOptions.length > 0 && !applyOnOptions.length) {
      const filterdApplies = products.filter(product =>
        categoryOptions.includes(product.category)
      );
      setFilteredApplies(filterdApplies);
    } else if (!categoryOptions.length && applyOnOptions.length > 0) {
      const filterdApplies = products.filter(product => {
        const check = el => applyOnOptions.includes(el);
        return product.apply_on.some(check);
      });
      setFilteredApplies(filterdApplies);
    } else if (!categoryOptions.length && !applyOnOptions.length) {
      setFilteredApplies(products);
    } else {
      const filterdApplies = products
        .filter(product => categoryOptions.includes(product.category))
        .filter(product => {
          const check = el => applyOnOptions.includes(el);
          return product.apply_on.some(check);
        });
      setFilteredApplies(filterdApplies);
    }
  };

  const getCategories = name => {
    const isIncluded = categoryOptions.includes(name);
    isIncluded
      ? setCategoryOptions(
          categoryOptions.filter(selected => selected !== name)
        )
      : setCategoryOptions([...categoryOptions, name]);
    handleFiltered();
  };

  const getApplies = name => {
    const isIncluded = applyOnOptions.includes(name);
    isIncluded
      ? setApplyOnOptions(applyOnOptions.filter(selected => selected !== name))
      : setApplyOnOptions([...applyOnOptions, name]);
    handleFiltered();
  };

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
        setFilteredProducts(res.product_list);
        setFilteredApplies(res.product_list);
      });
  }, []);
  return (
    <Container className="ProductList">
      <Nav />
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
