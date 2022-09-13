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

const Home = ({
  picData,
  categories,
  rawCategoryData,
  setRawCategoryData,
  isChanged,
  setIsChanged,
}) => {
  const [isSetting, setIsSetting] = useState(false);
  const [categoryDataChanged, setCategoryDataChanged] = useState(false);
  const onSet = () => {
    setIsSetting(!isSetting);
  };
  useEffect(() => {
    // 스토리 내부 카테고리 설정 내역 변경시 picData를 새로 받아올 수 있도록
    fetch("http://localhost:3001/diary/")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        categories.forEach((category) => {
          let id = -1;
          rawCategoryData.forEach((el) => {
            if (el.category === category) {
              id = el.id;
            }
          });
          let temp = [];
          data.forEach((el) => {
            el.content.forEach((content) => {
              if (content.category === category) {
                temp.push({
                  date: el.date,
                  title: el.title,
                  picture: content.picture,
                  text: content.text,
                });
              }
            });
          });
          fetch(`http://localhost:3001/categories/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: temp }),
          }).then((res) => {
            setCategoryDataChanged(!categoryDataChanged);
          });
        });
      });
  }, [picData]);

  return (
    <>
      <SettingContainer>
        <button onClick={onSet}>카테고리 설정</button>
      </SettingContainer>
      <CategoryContainer>
        {categories.map((el, idx) => {
          return (
            <PicCategory
              key={idx}
              picData={picData}
              categories={categories}
              category={el}
              categoryDataChanged={categoryDataChanged}
            />
          );
        })}
      </CategoryContainer>
    </>
  );
};

export default Home;
