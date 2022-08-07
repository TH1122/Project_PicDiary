import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PicCategory = ({ categoryData, category }) => {
  const [storyCategory, setStoryCategory] = useState([]);
  const PicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;

    > .category_title {
      display: flex;
      justify-content: flex-start;
      width: 210px;
      background-color: grey;
      margin: 10px;
      padding: 10px;
      vertical-align: middle;
      font-weight: bold;
    }
  `;
  const PicWrapper = styled.div`
    background-color: #f2f2f2;
    width: 330px;
    height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > .photoContainer {
      margin: 15px 0px;
      width: 300px;
      height: 300px;
    }
    > .storyWrapper {
      margin: 15px 0px;
      width: 300px;
      height: 40px;
      background-color: #c2c2c2;
      display: flex;
      flex-direction: column;
    }
  `;
  const Date = styled.span`
    width: 300px;
    height: 20px;
    background-color: #c2c2c2;
  `;
  const Content = styled.span`
    width: 300px;
    height: 20px;
    background-color: #c2c2c2;
  `;

  useEffect(() => {
    setStoryCategory(categoryData[category]);
  }, []);

  console.log(storyCategory, "storyCategory");

  return (
    <>
      <PicContainer>
        <span className="category_title">{category}</span>
        {storyCategory.map((el) => {
          return (
            <>
              <PicWrapper>
                <div className="photoContainer">
                  <img src={el.picture} />
                </div>
                <div className="storyWrapper">
                  <Date>{el.date}</Date>
                  <Content>{`${el.title} / ${el.text}`}</Content>
                </div>
              </PicWrapper>
            </>
          );
        })}
      </PicContainer>
    </>
  );
};
export default PicCategory;
