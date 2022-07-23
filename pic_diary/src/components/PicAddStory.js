import React,{useState} from "react";

const PicAddStory = () => {
    const [text, setText] = useState("");
    const [button, setButton] = useState("활성화");
    const [readonly, setRO] = useState(true);

    const onChange = (event) => {
        setText(event.target.value);
    }
    
    const onButton = () => {
        if(button === "활성화"){
          setButton("비활성화");
          setRO(false);
        } else {
          setButton("활성화");
          setRO(true);
        }
    }

    const onMouseDown = () => {
        if(readonly === true) alert("글을 수정하려면 하단 버튼을 클릭하여서 수정모드로 변환해주세요.");
    }
    
    return (
        <>
            <input className="storyWrapper" type="text" value={text} onChange={onChange} readOnly={readonly} onMouseDown={onMouseDown}></input>
            <button onClick={onButton}>{button}</button>
        </>
    )
}

export default PicAddStory