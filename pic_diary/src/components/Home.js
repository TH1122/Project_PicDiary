import React, { useState, useEffect } from "react";
import PicCategory from "./PicCategory";
import styled from "styled-components";

const Home = ({ picData }) => {
  const [categories, setCategories] = useState([]);
  const [pic, setPic] = useState({});

  useEffect(() => {
    let temp = [];
    picData.forEach((el) => {
      if (!temp.includes(el.category)) temp.push(el.category);
    });
    setCategories(temp);
    let temp2 = {};
    picData.forEach((el) => {
      if (temp.includes(el.category)) {
        if (temp2[el.category]) {
          temp2[el.category].push(el.content[0].picture);
        } else {
          temp2[el.category] = [el.content[0].picture];
        }
      }
    });
    setPic(temp2);
  }, []);
  const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <CategoryContainer>
        {categories.map((el) => {
          return <PicCategory category={el} pic={pic} picData={picData} />;
        })}
      </CategoryContainer>
    </>
  );
};

export default Home;
