import React from 'react';
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <section className="menubar">
        <Link to="/"><span>프로젝트이름</span></Link>
        <Link to="/list"><button>리스트보기</button></Link>
        <Link to="/add"><button>다이어리추가</button></Link>
    </section>
  );
};

export default Menubar;
