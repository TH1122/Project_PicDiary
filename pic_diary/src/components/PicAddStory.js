import React, { useEffect, useState, useRef } from "react";

const PicAddStory = ({ data, text, setText, setPicData, picData }) => {
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
    setPicData(picData.filter((el) => el.id !== data.id));
  };

  useEffect(() => {
    storyRef.current.value = text;
  });

  return (
    <>
      <input
        className="storyWrapper"
        type="text"
        ref={storyRef}
        readOnly={readonly}
        onMouseDown={onMouseDown}
      ></input>
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
