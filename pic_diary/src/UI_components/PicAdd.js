import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PicAddStory from "../components/PicAddStory";

const PicAdd = ({ data, picture, content, setPicData, picData, date }) => {
  const [text, setText] = useState("");
  const PicContainer = styled.div`
    background-color: #f2f2f2;
    width: 330px;
    height: 504px;
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

  return (
    <div>
      <PicContainer className="picContainer">
        <div className="photoContainer">
          <img src={picture} />
        </div>
        <PicAddStory
          text={text}
          setText={setText}
          picData={picData}
          data={data}
          date={date}
          content={content}
          setPicData={setPicData}
        ></PicAddStory>
      </PicContainer>
    </div>
  );
};
export default PicAdd;
