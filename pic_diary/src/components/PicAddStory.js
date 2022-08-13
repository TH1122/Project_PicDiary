import React, { useEffect, useState, useRef } from "react";

const PicAddStory = ({ data, content, setPicData, picData, date, options }) => {
  const [button, setButton] = useState("활성화");
  const [text, setText] = useState("");
  const [readonly, setRO] = useState(true);
  const storyRef = useRef(null);
  useEffect(() => {
    setText(data.text);
    storyRef.current.value = data.text;
  }, []);

  const setData = () => {
    let picData_newText = picData.map((el) => {
      if (el.date === date) {
        let content_newText = [];
        el.content.forEach((content) => {
          if (content.date_id !== data.date_id) {
            content_newText.push(content);
          } else {
            content.text = text;
            content_newText.push(content);
          }
        });
        el.content = content_newText;
        return el;
      } else {
        return el;
      }
    });
    setPicData(picData_newText);
  };

  const onButton = (e) => {
    if (button === "활성화") {
      setButton("비활성화");
      setRO(false);
    } else {
      setButton("활성화");
      setRO(true);
      setData();
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

  const handleCategory = (e) => {
    let picData_newCategory = picData.map((el) => {
      if (el.date === date) {
        let content_newCategory = [];
        el.content.forEach((content) => {
          if (content.text !== storyRef.current.value) {
            content_newCategory.push(content);
          } else {
            if (e.target.value === "---") {
              delete content.category;
            } else {
              content.category = e.target.value;
            }
            content_newCategory.push(content);
          }
        });
        el.content = content_newCategory;
        return el;
      } else {
        return el;
      }
    });
    setPicData(picData_newCategory);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        className="storyWrapper"
        type="text"
        ref={storyRef}
        value={text}
        readOnly={readonly}
        onMouseDown={onMouseDown}
        onChange={onChange}
      ></input>
      {button === "비활성화" ? (
        <select onChange={handleCategory}>
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
