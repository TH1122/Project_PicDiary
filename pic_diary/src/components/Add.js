import React,{useState} from 'react';
import PicAdd from '../UI_components/PicAdd';
import { dummyData } from '../data/dummyData';

const Add = () => {
  const [picData, setPicData] = useState(dummyData);

  return (
    <section className="add">
        {picData.map((el)=>{
          return (<PicAdd key={picData.id} picture={el.picture} content={el.picture}></PicAdd>)
        })}
    </section>
  );
};

export default Add;
