"use client"
import React from 'react';
import styled from 'styled-components';
import Cap from '../../assets/cap.jpg';
import Hoodie from '../../assets/hoodie.jpg';

const ShopSection = styled.section`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const ProductTitle = styled.h3`
  margin: 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const BuyButton = styled.button`
  background-color: #ffff00;
  color: #000000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
`;

const Shop = () => {
  return (
    <ShopSection>
      <ProductGrid>
        <ProductCard>
          <ProductImage src={Cap} alt="Collegegrove Dispensary Trucker Hat" />
          <ProductTitle>Collegegrove Dispensary Trucker Hat on Green</ProductTitle>
          <ProductPrice>$30.00</ProductPrice>
          <BuyButton>Buy Now</BuyButton>
        </ProductCard>
        
        <ProductCard>
          <ProductImage src={Hoodie} alt="Collegegrove Photo Hoodie" />
          <ProductTitle>Collegegrove Photo Hoodie on Black</ProductTitle>
          <ProductPrice>$50.00</ProductPrice>
          <BuyButton>Buy Now</BuyButton>
        </ProductCard>
      </ProductGrid>
    </ShopSection>
  );
};

export default Shop;