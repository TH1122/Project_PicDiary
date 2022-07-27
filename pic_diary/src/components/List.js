import React from "react";

const List = ({ picData }) => {
  return (
    <section className="list">
      <ul>
        LIST
        {picData.map((el) => {
          return (
            <>
              <li key={el.id}>{el.date}</li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
