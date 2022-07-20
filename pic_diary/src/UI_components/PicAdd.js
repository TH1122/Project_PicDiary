import React from "react";
import styled from 'styled-components';

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

  > .storyContainer {
    margin: 15px 0px;
    width: 300px;
    height: 100px;
    background-color: #404040;
  }

`;

const PicAdd = () => {
    return (
        <div>
            <PicContainer>
                <div className="photoContainer"></div>
                <div className="storyContainer"></div>
            </PicContainer>  
        </div>
)}
export default PicAdd;