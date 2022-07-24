import React,{useState} from 'react';
import PicAdd from '../UI_components/PicAdd';

const Add = () => {
  const [picData, setPicData] = useState([{"id":1}, {"id":2}]);

  return (
    <section className="add">
        {picData.map((el)=>{
          return (<PicAdd key={picData.id}></PicAdd>)
        })}
    </section>
  );
};

export default Add;
