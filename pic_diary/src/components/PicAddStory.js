import React, { useEffect, useState, useRef } from "react";

const PicAddStory = ({
  data,
  text,
  setText,
  content,
  setPicData,
  picData,
  date,
  options,
}) => {
  const [button, setButton] = useState("활성화");
  const [readonly, setRO] = useState(true);
  const storyRef = useRef(null);

  const onButton = () => {
    if (button === "활성화") {
      setButton("비활성화");
      setRO(false);
    } else {
      setButton("활성화");
      setRO(true);
      setText(storyRef.current.value);
    }
  };

  const onMouseDown = () => {
    if (readonly === true)
      alert("글을 수정하려면 하단 버튼을 클릭하여서 수정모드로 변환해주세요.");
  };

  const onContentDeleteClick = () => {
    storyRef.current.value = "";
  };

  const onDeleteClick = () => {
    let temp = picData;
    temp.map((el) => {
      if (el.date === date) {
        el.content = el.content.filter(
          (content) => content.text !== storyRef.current.value
        );
        console.log(el, "chagne");
      }
    });
    setPicData(temp);
  };

  useEffect(() => {
    storyRef.current.value = data.text;
  }, []);

  const handleOnChange = (e) => {
    let temp = picData.map((el) => {
      if (el.date === date) {
        let temp5 = [];
        el.content.forEach((content) => {
          if (content.text !== storyRef.current.value) {
            temp5.push(content);
          } else {
            if (e.target.value === "---") {
              delete content.category;
            } else {
              content.category = e.target.value;
            }
            temp5.push(content);
          }
        });
        el.content = temp5;
        return el;
      } else {
        return el;
      }
    });
    setPicData(temp);
  };

  return (
    <>
      <input
        className="storyWrapper"
        type="text"
        ref={storyRef}
        value={data.text}
        readOnly={readonly}
        onMouseDown={onMouseDown}
      ></input>
      {button === "비활성화" ? (
        <select onChange={handleOnChange}>
          {options.map((el) => {
            return (
              <>
                {data.category === el ? (
                  <option selected value={el}>
                    {el}
                  </option>
                ) : (
                  <option value={el}>{el}</option>
                )}
              </>
            );
          })}
        </select>
      ) : null}
      <button onClick={onButton}>{button}</button>
      {button === "비활성화" ? (
        <button onClick={onContentDeleteClick}>전체 내용 삭제하기</button>
      ) : null}
      {button === "비활성화" ? (
        <button onClick={onDeleteClick}>해당 사진 삭제하기</button>
      ) : null}
    </>
  );
};

export default PicAddStory;
