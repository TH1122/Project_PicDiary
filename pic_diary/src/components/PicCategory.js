import React from "react";
import styled from "styled-components";

const PicCategory = ({ category, pic }) => {
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
      height: 100px;
      background-color: #c2c2c2;
    }
  `;
  const Title = styled.input`
    margin: 15px 0px;
    width: 300px;
    height: 100px;
    background-color: #c2c2c2;
  `;

  return (
    <>
      <PicContainer>
        <span className="category_title">{category}</span>
        <PicWrapper>
          <div className="photoContainer">
            <img src={pic[category][0]} />
          </div>
          <Title value={category}></Title>
        </PicWrapper>
      </PicContainer>
    </>
  );
};
export default PicCategory;
