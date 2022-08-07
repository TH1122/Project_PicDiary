import React, { useState, useEffect } from "react";
import PicCategory from "./PicCategory";
import styled from "styled-components";

const Home = ({ picData }) => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  useEffect(() => {
    //임시로 카테고리 추가
    setCategories(["데이트", "김코딩과 함께한 날"]);
  }, []);

  // useEffect(() => {
  //   //카테고리데이터가 배열일 경우
  //   categories.forEach((el) => {
  //     categoryData.push([el, []]);
  //   });
  //   setCategoryData(categoryData);
  // }, [categories]);

  // useEffect(() => {
  //   // 카테고리데이터가 배열일 경우
  //   picData.forEach((el) => {
  //     el.content.forEach((content) => {
  //       if (categories.includes(content.category)) {
  //         categoryData[categories.indexOf(content.category)][1].push({
  //           date: el.date,
  //           picture: content.picture,
  //           text: content.text,
  //           title: el.title,
  //         });
  //       }
  //     });
  //   });
  //   setCategoryData(categoryData);
  // }, [categories]);

  useEffect(() => {
    //카테고리데이터가 객체일 경우
    categories.forEach((el) => {
      categoryData[el] = [];
    });
    setCategoryData(categoryData);
  }, [categories]);

  useEffect(() => {
    // 카테고리데이터가 객체일 경우
    picData.forEach((el) => {
      el.content.forEach((content) => {
        if (categories.includes(content.category)) {
          categoryData[content.category].push({
            date: el.date,
            picture: content.picture,
            text: content.text,
            title: el.title,
          });
        }
      });
    });
    setCategoryData(categoryData);
  }, [categories]);

  console.log(categoryData, "categoryData");
  console.log(categories, "categories");

  const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <CategoryContainer>
        {categories.map((el, idx) => {
          return (
            <PicCategory key={idx} categoryData={categoryData} category={el} />
          );
        })}
      </CategoryContainer>
    </>
  );
};

export default Home;
