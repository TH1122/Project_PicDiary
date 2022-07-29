import React, { useState } from "react";
import styled from "styled-components";
import PicAdd from "../UI_components/PicAdd";
import { dummyData } from "../data/dummyData";

const Add = ({ picData, setPicData }) => {
  const Add_container = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;
  const Info_container = styled.section`
    height: 76px;
    background-color: #f4eee2;
    margin-bottom: 20px;
    display: flex;

    > .info_wrapper {
      flex-grow: 5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: stretch;
    }
    > .icon_wrapper {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  const Picadd_wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <Add_container>
        <Info_container>
          <form className="info_wrapper">
            <label>
              날짜 :<input></input>
            </label>
            <label>
              제목 :<input></input>
            </label>
          </form>
          <div className="icon_wrapper">
            <button>사진추가</button>
          </div>
        </Info_container>
        <Picadd_wrapper>
          {picData.map((el) => {
            return (
              <PicAdd
                key={el.id}
                data={el}
                picture={el.picture}
                content={el.picture}
                picData={picData}
                setPicData={setPicData}
              ></PicAdd>
            );
          })}
        </Picadd_wrapper>
      </Add_container>
    </>
  );
};

export default Add;
