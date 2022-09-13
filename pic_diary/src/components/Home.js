import React, { useState, useEffect } from "react";
import PicCategory from "./PicCategory";
import styled from "styled-components";

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px;
`;

const CategoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = ({ categories }) => {
  const [isSetting, setIsSetting] = useState(false);
  const onSet = () => {
    setIsSetting(!isSetting);
  };
  return (
    <>
      <SettingContainer>
        <button onClick={onSet}>카테고리 설정</button>
      </SettingContainer>
      <CategoryContainer>
        {categories.map((el, idx) => {
          return (
            <PicCategory key={idx} categories={categories} category={el} />
          );
        })}
      </CategoryContainer>
    </>
  );
};

export default Home;
