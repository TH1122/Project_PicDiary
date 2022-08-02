import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PicAdd from "../UI_components/PicAdd";

const AddByDate = ({ picData, setPicData }) => {
  const { date } = useParams();
  const [newPicData, setNewPicData] = useState([]);
  const [title, setTitle] = useState("");
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
  const Picadd_wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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
  };

  const test = (e) => {
    console.log(date);
  };

  useEffect(() => {
    setNewPicData(
      ...picData.filter((el) => el.date === date).map((el) => el.content)
    );
    setTitle(...picData.filter((el) => el.date === date).map((el) => el.title));
  }, []);

  return (
    <>
      <Add_container>
        <Info_container onSubmit={handleSubmit}>
          <div className="info_wrapper">
            <label>
              날짜 :<input type="date" value={date} readOnly="true"></input>
            </label>
            <label>
              제목 :<input value={title} readOnly="true"></input>
            </label>
          </div>
          <div className="icon_wrapper">
            <button>사진추가</button>
          </div>
        </Info_container>
        <button onClick={test}>test</button>
        <Picadd_wrapper>
          {newPicData.map((el) => {
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

export default AddByDate;
