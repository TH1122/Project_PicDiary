import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const PicAdd = () => {
  const [button, setButton] = useState("활성화");
  const [readonly, setRO] = useState(true);

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
  `;

  const StoryWrapper = styled.input`
    margin: 15px 0px;
    width: 300px;
    height: 100px;
    background-color: #c2c2c2;

  `
  const onButton = () => {
    if(button === "활성화"){
      setButton("비활성화");
      setRO(false);
    } else {
      setButton("활성화");
      setRO(true);
    }
  }

    return (
        <div>
            <PicContainer className="picContainer">
                <div className="photoContainer" ></div>
                <StoryWrapper className="storyWrapper" type="text" readOnly={readonly} ></StoryWrapper>
                <button onClick={onButton}>{button}</button>
            </PicContainer>  
        </div>
)}
export default PicAdd;