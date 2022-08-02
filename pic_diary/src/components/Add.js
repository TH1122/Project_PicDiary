import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Add = ({ picData, setPicData }) => {
  let navigate = useNavigate();
  const Add_container = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;
  const Info_container = styled.form`
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

  const handleSubmit = (e) => {
    const getRandomNumber = (min, max) => {
      return parseInt(Math.random() * (Number(max) - Number(min) + 2));
    };
    setPicData([
      ...picData,
      {
        id: picData.length,
        date: e.target[0].value,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        content: e.target[1].value,
      },
    ]);
    navigate(`/add/${e.target[0].value}`);
  };

  return (
    <>
      <Add_container>
        <Info_container onSubmit={handleSubmit}>
          <div className="info_wrapper">
            <label>
              날짜 :<input type="date"></input>
            </label>
            <label>
              제목 :<input></input>
            </label>
          </div>
          <div className="icon_wrapper">
            <button>사진추가</button>
          </div>
        </Info_container>
      </Add_container>
    </>
  );
};

export default Add;
