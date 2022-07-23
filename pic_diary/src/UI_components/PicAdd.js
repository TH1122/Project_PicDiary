import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import PicAddStory from "../components/PicAddStory";

const PicAdd = () => {
  const [text, setText] = useState("");
  const PicContainer = styled.div`
    background-color: #f2f2f2;
    width: 330px;
    height: 504px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  > .photoContainer {
    margin: 15px 0px;
    width: 300px;
    height: 300px;
    background-color: #404040;
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
                <div className="photoContainer" ></div>
                <PicAddStory text={text} setText={setText}></PicAddStory>
            </PicContainer>  
        </div>
)}
export default PicAdd;